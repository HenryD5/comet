import React, { useEffect, useState, useMemo } from 'react'
import { useRouter } from "next/router";
import Box from '@mui/material/Box';
import Navbar from "@components/Navbar/Navbar";
import Bottombar from "@components/Bottombar/Bottombar";
import Summary from "@components/Summary/Summary";
import Status from "@components/Payment/Status";
import ItemPayment from "@components/Payment/ItemPayment";
import Loader from "@components/Loader/Loader";

 const Student = () => {
    //gl
    const [isLoading, setLoading] = useState(false);
    
    //date
    const now = new Date();

    //state
    const [student, setStudent] = useState({});
    const [payments, setPayments] = useState([]);
    const [cart, setCart] = useState([]);
    const [amount, setAmount] = useState(0);
    
    // router - query - slug - id
    const { query : {id}} = useRouter()

    //apis
    const requestOptions = {
        method: 'GET',
        headers: {'hash': 'OcJn4jYChW'}
    };
    
    const apiUrl = 'http://ec2-3-239-221-74.compute-1.amazonaws.com:8000/api/v1/'
    
    const fetchStudent = async () => {
        if (id) {
          const response = await window.fetch(`${apiUrl}students/${id}/`, requestOptions);
          if (response.status === 200) {
            const student = await response.json();
            setStudent(student);
          }
        }
    };
    const fetchPayments = async () => {
        if (id) {
          const response = await window.fetch(`${apiUrl}students/${id}/orders/`, requestOptions);
          if (response.status === 200) {
            const payments = await response.json();
            setPayments(payments);
          }
        }
    };
    
    useEffect(() => {
      fetchPayments();
      fetchStudent();
    }, [id]);

    // computed o reactive methods
    const getStatusPayments = (val) => {
      if(id && payments !== undefined) {
        const payment = payments.filter(item => item.status === val)
        return payment
      } else {
        return []
      }
    }
    // PAID
    const paid = useMemo(() => {
        const payment = getStatusPayments('PAID')
        return payment
    }, [payments]);
    
    // DUE
    const due = useMemo(() => {
      const payment = getStatusPayments('DUE')
      return payment
    }, [payments]);

    // OUTSTANDING
    const outstanding = useMemo(() => {
      const payment = getStatusPayments('OUTSTANDING')
      return payment
    }, [payments]);

    // LOGIC PAYMENT
    const handleCart = (item, checked) => {
      const checkIndex = cart.findIndex(val => val.id === item.id)
      if(checkIndex > -1 && !checked) {
        cart.splice(checkIndex, 1)
      } else if(checked) {
        cart.push(item)
      }
      getTotal()
    }
  
    const getTotal = () => {
      const total = (cart || []).reduce((currentValue, nextValue) => {
          return parseInt(currentValue) + parseInt(nextValue.price);
      }, 0)
      setAmount(total)
    };
    
    const handlePayment = () => {
      setLoading(true)
      const paymentArr = JSON.parse(JSON.stringify(payments))
      const cartD = JSON.parse(JSON.stringify(cart))
      cartD.forEach((item) => {
        if (item.status !== 'PAID') {
          let checkIndex = paymentArr.findIndex(val => val.id === item.id)
          if(checkIndex > -1) {
            paymentArr.splice(checkIndex, 1)
            item.status = 'PAID'
            item.payin = {
              'created': `${now}`,
              'id': "2d724299-e12d-4153-aa86-61636f0f441d",
              'status': "approved"
            }
            paymentArr.push(item)
            handleCart(item, false)
          }
        }
      });
      setPayments(paymentArr);
      setTimeout(() => {
        setLoading(false)
      }, 3000);
    }

    // RETURNS VIEWS
    return (
        <div>
            <Navbar school={student?.school?.name} logo={student?.school?.logo} />
            
            <Box sx={{ flexGrow: 1, marginY: '70px' }}>
              <Summary name={student?.first_name + ' ' +student?.last_name } cohort={student?.cohort} amount={amount} />
              <Status name="Cuotas Pagadas" status="PAID" length={paid.length}>
                {paid?.map((payment, key) => (
                    <div key={key}>
                        <ItemPayment item={payment}/>
                    </div>
                ))}
              </Status>
              <Status name="Cuotas Pendientes" status="DUE" length={due.length}>
                {due?.map((payment, key) => (
                    <ItemPayment item={payment} key={key} chk={isLoading} handleCart={handleCart}/>
                ))}
              </Status>
              <Status name="Cuotas Futuras" status="OUTSTANDING" length={outstanding.length}>
                {outstanding?.map((payment, key) => (
                    <div key={key}>
                        <ItemPayment item={payment} chk={isLoading} handleCart={handleCart}/>
                    </div>
                ))}
              </Status>
            </Box>
            {
              amount > 0 &&
              <Bottombar handlePayment={handlePayment}/>
            }
            { isLoading && <Loader />}
        </div>
    )
}

export default Student;