import React, { useState, useEffect, useRef } from 'react';
import DefaultFooter from '../components/DefaultFooter';
import Button from '@material-tailwind/react/Button';
import DefaultNavbar from '../components/DefaultNavbar';
import { useParams, Link } from "react-router-dom";
import Icon from '@material-tailwind/react/Icon';

import TableCard from '../components/TableCard';
import TableDetail from '../components/TableDetail';
import { useDispatch, useSelector } from 'react-redux';
import { lendTokenAction, withdrawAction } from '../redux/actions/lenderActions';

export default function SupplyBorrow() {
    const dipatch = useDispatch()
    const network = useSelector(state => state.net)

    let { selected } = useParams();

    const [mode, setMode] = useState('')

    const [modalShow, setModalShow] = useState('hidden')

    const [clicked, setClicked] = useState('')

    const [collat, setCollat] = useState(false)

    const [input, setInput] = useState('')

    useEffect(() => {
        setMode(selected)
    }, [])

   

    function handleSubmit() {
        console.log('touched', network, clicked)
        const payLoad = {
            accLender: network.user,
            ctcOwner: network.ctc
        }
        const amount = parseInt(input)
        const id = network.id
        switch (clicked) {
            case 'Send':
                network.user && dipatch(lendTokenAction(payLoad, amount, id))
                setModalShow('hidden')
                break;
            case 'Receive':
                const data = {
                    accLender: network.user,
                    ctcOwner: network.ctc,
                    date: Math.floor(Date.now() / 86400000)
                } 
                network.user && dipatch(withdrawAction(data))
                setModalShow('hidden')
                break;

            default:
                break;
        }
    }

    return (

        <main>
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>

            <div className="items-center">

                <div className="white pt-14 pb-28 px-3 md:px-8 h-auto">
                    <div className="container mx-auto max-w-full">
                        <div className="w-full p-12 px-4 ml-auto mr-auto text-center">
                            <h1 class="my-4 tracking-wider md:text-sm mb-8 font-semibold text-black opacity-75  leading-tight text-left md:text-center">
                                Welcome to the official page of Chirp Chirp Gift Pool. {mode}
                            </h1>
                            {
                                mode === 'send' ?
                                    <div className="inline-flex float-left " >
                                        <Button
                                            color="transparent"
                                            className=" flex-1 bg-primary py-4 h-10 rounded-full"
                                            ripple="dark"

                                        >
                                            <span className="text-white normal-case text-sm" >
                                                Send Gift
                                            </span>
                                        </Button>

                                        <Link to='/mode/receive' >
                                            <Button
                                                color="transparent"
                                                className="flex-1 bg-yellow-600 opacity-25 py-4 h-10 ml-4 rounded-full"
                                                ripple="dark"
                                                onClick={() => setMode('receive')}
                                            >
                                                <span className="text-white  normal-case text-sm" >
                                                    Receive Gift
                                                </span>
                                            </Button>
                                        </Link>
                                    </div>
                                    :
                                    <div className="inline-flex float-left " >
                                        <Link to='/mode/send' >
                                            <Button
                                                color="transparent"
                                                className=" flex-1 bg-primary opacity-25 py-4 h-10 rounded-full"
                                                ripple="dark"
                                                onClick={() => setMode('send')}
                                            >
                                                <span className="text-white  normal-case text-sm" >
                                                    Send Gift
                                                </span>
                                            </Button>
                                        </Link>

                                        <Button
                                            color="transparent"
                                            className="flex-1 bg-yellow-600 py-4 h-10 ml-4 rounded-full"
                                            ripple="dark"
                                        >
                                            <span className="text-white  normal-case text-sm" >
                                               Receive Gift
                                            </span>
                                        </Button>
                                    </div>
                            }

                            <div className="grid grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mb-4">
                                <div className="m-8" >
                                    <h1 class="my-4 tracking-wider md:text-md font-semibold text-black opacity-50  leading-tight text-center md:text-center">
                                        Wallet Balance
                                    </h1>
                                    <h1 className=" tracking-wider font-bold md:mb-8  md:text-xl">
                                        <span className="bg-clip-text text-black opacity-75" >{network.userBalance ? network.userBalance : 0} ALGOS</span>
                                    </h1>
                                </div>                               
                               

                                <div className="m-8" >
                                    <h1 class="my-4 tracking-wider md:text-md font-semibold text-black opacity-50  leading-tight text-center md:text-center">
                                        Total Sent
                                    </h1>
                                    <h1 className=" tracking-wider font-bold md:mb-8  md:text-xl">
                                        <span className="bg-clip-text text-black  opacity-75" > $ {network.bal ? network.bal : 0} </span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-3 md:px-8 h-auto -mt-24">
                    <div className="container mx-auto max-w-6/12">
                        <div className="grid grid-cols-1 px-4 mb-16">

                            {
                                mode === 'send' ?
                                    <>
                                        <TableDetail header={'Your Gift Value'} returnInput={(value) => { setModalShow(''); setClicked(value) }} double={false} mode={mode} name={['Send Gift']} />

                                      
                                        <TableDetail header={'Received Gifts'} returnInput={(value) => (value)} mode={mode} name={['Receive Gift']} />
                                    </>
                                    :
                                    <>
                                        <TableDetail header={'Your Gift Value'} returnInput={(value) => { setModalShow(''); setClicked(value) }} double={false} mode={mode} name={['Send Gift']} />

                                        <TableDetail header={'Received Gifts'} returnInput={(value) => (value)} mode={mode} name={['Receive Gift']} />
                                    </>
                            }


                        </div>
                    </div>
                </div>

            </div>

            <div onClick={() => {
                // close modal when outside of modal is clicked
                setModalShow('hidden')
            }} className={`modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-new-gray-200 ${modalShow}`}>
                {/* <!-- modal --> */}
                <div onClick={e => {
                    // do not close modal if anything inside modal content is clicked
                    e.stopPropagation();
                }} class="bg-white rounded shadow-lg w-2/3">
                    {/* <!-- modal header --> */}
                    <div class="border-b px-4 py-2 flex justify-around items-center">
                        <h3 class="font-semibold text-lg">{clicked}</h3>
                        <button onClick={() => setModalShow('hidden')} class="text-black  close-modal">
                            <Icon
                                family="font-awesome"
                                name="fas fa-times"
                                color="red"
                            />
                        </button>
                    </div>
                    {/* <!-- modal body --> */}
                    <div class="pb-3">
                        { clicked !== 'Withdraw' &&
                            <input value={input} class="border bg-gray-100 border-gray-200 text-center text-lg p-8 rounded-r-lg outline-none focus:ring-1 ring-gray-100 w-full pl-1"
                            id=""
                            name=""
                            required="true"
                            onChange={e => setInput(e.target.value)}
                            type="text"
                            placeholder={`Enter the amount you want to ${clicked}`}
                        />
                        }
                    </div>

                    <table className=" ml-16  w-full bg-transparent border-collapse">
                        <tbody>
                          

                            <tr>
                                <th className="px-2 flex flex-col align-middle py-3 text-sm whitespace-nowrap font-light text-left">
                                    <span className="text-black normal-case text-md" >
                                        Available to {clicked}
                                    </span>
                                    <span className="text-gray-700 normal-case text-xs" >
                                        (Based on your collateral)
                                    </span>
                                </th>
                                <th className="px-2 align-middle text-gray-400  py-3 text-sm whitespace-nowrap text-left">
                                    0.00USDT
                                </th>
                            </tr>

                            <tr>
                                <th className="px-2 ml-8 align-middle py-3 text-sm whitespace-nowrap font-light text-left">
                                    {clicked} Limit Used
                                </th>
                                <th className="px-2  align-middle  py-3 text-sm whitespace-nowrap text-gray-400 text-left">
                                    0 %
                                </th>
                            </tr>
                        </tbody>
                    </table>

                    <div class="flex flex-col items-center w-100  p-8">
                        {
                            (clicked === 'Send Gift' || clicked === 'Receive Gift')
                                ?
                                <Button
                                    color="transparent"
                                    className="flex-1 bg-new-green py-4 w-2/3 mb-4 rounded-full"
                                    ripple="dark"
                                    onClick={() => handleSubmit()}
                                >
                                    <span className="text-white  normal-case text-sm" >
                                        {clicked}
                                    </span>
                                </Button>
                                :
                                <Button
                                    color="transparent"
                                    className="flex-1 bg-new-purple py-4 w-2/3 mb-4 rounded-full"
                                    ripple="dark"
                                    onClick={() => handleSubmit()}
                                >
                                    <span className="text-white  normal-case text-sm" >
                                        {clicked}
                                    </span>
                                </Button>
                        }
                        <p
                            onClick={() => setModalShow('hidden')}
                            className="text-gray-500 font-bold text-md">
                            Go Back
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-contract">
                <DefaultFooter />
            </div>

        </main>

    )


}