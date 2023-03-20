import { inputRegisterType } from '@/types/UserInformation/Information'
import React from 'react'

interface ChildProps {
    inputData: inputRegisterType;
    setInputData: React.Dispatch<React.SetStateAction<inputRegisterType>>
}

const Step01 = ({ inputData, setInputData }: ChildProps) => {
    return (
        <>
        <div className="container">
          <section className="signup-logo">
            <img src="https://www.starbucks.co.kr/common/img/common/logo.png" />
          </section>
  
          <section className="signup-notice">
            <p className="customer">고객님</p>
            <p className="welcome">환영합니다!</p>
          </section>
  
          <section className="signup-policy">
            <div className="signup-policy-top">
              <input type="checkbox" />
              <p>약관 전체동의</p>
            </div>
            <div className="signup-policy-bottom">
              <div className="signup-policy-bottom-list">
                <div className="signup-policy-bottom-list-subject">
                  <input type="checkbox" />
                  <p>이용약관 동의(필수)</p>
                </div>
                <img src="../images/icons/right-arrow-black.png" />
              </div>
              <div className="signup-policy-bottom-list">
                <div className="signup-policy-bottom-list-subject">
                  <input type="checkbox" />
                  <p>개인정보 수집 및 이용동의(필수)</p>
                </div>
                <img src="../images/icons/right-arrow-black.png" />
              </div>
  
              <div className="signup-policy-bottom-list">
                <div className="signup-policy-bottom-list-subject">
                  <input type="checkbox" />
                  <p>광고성 정보 수신동의(선택)</p>
                </div>
                <img src="../images/icons/right-arrow-black.png" />
              </div>
            </div>
            <div className="signup-policy-bottom-method">
              <p>광고성 정보 수신 방법(선택)</p>
              <div className="signup-policy-bottom-method-category">
                <input type="checkbox" id="E-mail" />
                <p>E-mail</p>
                <input type="checkbox" />
                <p>SMS</p>
              </div>
            </div>
          </section>

        </div>
      </>
    )
}

export default Step01;