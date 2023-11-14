import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { rutTien, nhanTien } from '../redux/actions/bankAction';
import { rutTien,nhanTien } from '../reduxtool/bankSlice';
const Bank = () => {
    const money=useSelector(state=>state.bankReducer.money)
    const dispatch=useDispatch()
    const txtMoney=useRef()

    const handleRutTien=()=>{
        const num=Number(txtMoney.current.value)
        dispatch(rutTien(num))
    }

    const handleNhanTien=()=>{
        const num=Number(txtMoney.current.value)
        dispatch(nhanTien(num))
    }
    return (
        <>
            Số tiền trong tài khoản: {money}
            <input type="number" ref={txtMoney} />
            <button onClick={handleRutTien}>Rút tiền</button>
            <button onClick={handleNhanTien}>Nhận tiền</button>
        </>
    );
};

export default Bank;