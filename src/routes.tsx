import React from 'react'
import ChooseToken from './pages/ChooseToken'
import SwapTest from './pages/SwapTest'
import {HashRouter} from "react-router-dom"
import {Routes as ReactRoutes,Route} from "react-router-dom"
import SwapTest2 from './pages/SwapTest/index2'
import SwapInfor from './pages/Infor'
import Page5 from './pages/SendToken'
import Page6 from './pages/SendToken/index1'
import Page7 from './pages/SendToken/index2'
import SwapMain from './pages/SwapMain'
import SettingDeposit from './pages/Deposit/SettingDeposit'
import UserDeposit from './pages/Deposit/UserDeposit'
import IndexDeposit from './pages/ChooseToken/indexDeposit'
import FinalDeposit from './pages/Deposit/FinalDeposit'
import Withdraw from './pages/Withdraw LP'
import RemoveLP from './pages/RemoveLP'
import LockLp from './pages/LockLP'
import WindrawPayment from './pages/WindrawPayment'
import SwapMain2 from './pages/SwapMain/index2'
import Gateway from './pages/Gateway'
import QRpage1 from './pages/QRPage/QRPage'
import QRpage2 from './pages/QRPage/QRPage2'
export default function Routes() {
  return (
    <div>
        <HashRouter>
            <ReactRoutes>
                <Route path='/' element={<ChooseToken/>}/>               
                <Route path='/1' element={<SwapTest/>}/>
                <Route path='/2' element={<SwapTest2/>}></Route>
                <Route path='/3' element = {<SwapInfor/>}></Route>
                <Route path='/4' element = {<Page5/>}></Route>
                <Route path='/5' element = {<Page6/>}></Route>
                <Route path='/6' element = {<Page7/>}></Route>
                <Route path='/7' element = {<SwapMain/>}></Route>
                <Route path='/8' element = {<SettingDeposit/>}></Route>
                <Route path='/9' element = {<UserDeposit/>}></Route>
                <Route path='/10' element = {<IndexDeposit/>}></Route>
                <Route path='/11' element = {<FinalDeposit/>}></Route>
                <Route path='/12' element = {<Withdraw/>}></Route>
                <Route path='/13' element = {<RemoveLP/>}></Route>
                <Route path='/14' element = {<LockLp/>}></Route>
                <Route path='/15' element = {<WindrawPayment/>}></Route>
                <Route path='/16' element = {<SwapMain2/>}></Route>
                <Route path='/17' element = {<Gateway/>}></Route>
                <Route path='/18' element = {<QRpage1/>}></Route>
                <Route path='/19' element = {<QRpage2/>}></Route>


            </ReactRoutes>
        </HashRouter>
    </div>
  )
}
