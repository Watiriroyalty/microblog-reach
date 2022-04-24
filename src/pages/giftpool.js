import DefaultNavbar from '../components/DefaultNavbar';
import CardImage from '@material-tailwind/react/CardImage';
import CardBody from '@material-tailwind/react/CardBody';
import H5 from '@material-tailwind/react/Heading5';
import H4 from '@material-tailwind/react/Heading4';
import LeadText from '@material-tailwind/react/LeadText';
import Bag from '../assets/img/bag.png';
import DefaultFooter from '../components/DefaultFooter';
import Button from '@material-tailwind/react/Button';
import USDC from '../assets/img/USDC.png'
import USDC_SPEC from '../assets/img/usdc_spec.png'
import Algo from '../assets/img/spec_algo.png';
import AlgoLogo from '../assets/img/algo_logo.png';
import StatusCard from '../components/StatusCard';
import { Link } from "react-router-dom";
import Icon from '@material-tailwind/react/Icon';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { acceptTokenAction, deployContractAction, viewLendingTokenAction } from '../redux/actions/ownerActions';
import { setBalance } from '../redux/actions/networkActions';
import { contractBalanceAction } from '../redux/actions/lenderActions';

export default function GiftPool() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.net)

    React.useEffect(() => {
        console.log(user)
      !user.ctc && dispatch(deployContractAction())
      user.ctcLender && dispatch(contractBalanceAction({ctcLender: user.ctcLender, id:process.env.REACT_APP_TOKEN_ID}))
    },[dispatch])
    

    return (
        <main className="white" >
            <div className="absolute w-full z-20">
                <DefaultNavbar />
            </div>

            <div className="items-center flex space-y-16 flex-wrap">               


                <div className="w-full  px-4 ml-auto mr-auto text-center">
                    <h1 class="my-4 tracking-wider md:text-2xl font-semibold text-white   leading-tight text-center md:text-center">
                        GIFT POOL
                    </h1>
                    <h1 className=" tracking-wider font-bold md:mb-16  md:text-4xl">
                        <span className="bg-clip-text text-transparent font-bold bg-gradient-to-b from-light-color-500  to-green-500" > $ {user.bal ? user.bal : 0} </span>
                    </h1>
                    <div className="inline-flex" >
                        <Link to="/mode/send">
                            <Button
                                color="transparent"
                                className=" flex-1 bg-new-green py-4  ml-4 rounded-full"
                                ripple="dark"
                            >
                                <span className="text-white normal-case text-sm" >
                                    Send Gift
                                </span>
                            </Button>
                        </Link>

                        <Link to="/mode/receive">
                            <Button
                                color="transparent"
                                className="flex-1 bg-new-purple py-4  ml-4 rounded-full"
                                ripple="dark"
                            >
                                <span className="text-white normal-case text-sm" >
                                    Receive Gift
                                </span>
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="container max-w-8xl mb-16 mx-auto px-4">
                    <div className="flex flex-wrap  sm:mt-8 md:pt-16 ">
                        <div className="w-full md:text-xl   md:w-4/12 px-2 mx-auto">
                            <H5 className="" color="black">
                                You can send Tokens to your favorite Chirpers!
                            </H5>
                            <LeadText color="black">
                            Chirp Chirp protocol lets you send and receive gift tokens from anywhere in the world.
                            </LeadText>
                            
                        </div>
                      
                    </div>
                </div>         
            </div>

            <DefaultFooter />

        </main>
    )
}