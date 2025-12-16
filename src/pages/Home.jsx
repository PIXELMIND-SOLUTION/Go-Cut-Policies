import { useNavigate } from "react-router-dom";

const Home = () => {
const navigate = useNavigate();

    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100 w-100">
                <div className="ext-center">
                    <button className="btn btn-lg btn-info m-2" onClick={()=>navigate('/privacy-and-policy')}>PrivacyAndPolicy</button>
                    <button className="btn btn-lg btn-info m-2" onClick={()=>navigate('/terms-and-conditions')}>TermsandConditions</button>
                    <button className="btn btn-lg btn-info m-2" onClick={()=>navigate('/cancel-refund')}>Cancellation and Refund</button>
                </div>
            </div>
        </>
    )
}

export default Home;