import { useState, useRef, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import myStyle from "./ProductOrderSection.module.css";
import Sheet, { SheetRef } from "react-modal-sheet";
import Separator from "@/components/ui/Separator";

import { useRouter } from "next/router";
import Swal from "sweetalert2";
import Image from "next/image";
import ButtonUi from "@/components/ui/ButtonUi";
import { userLoginState } from "@/state/user/atom/userLoginState";
import { useRecoilValue } from "recoil";
import Config from "@/configs/config.export";
import axios from "axios";

interface Props {
  productId: number;
  productName: string;
  productPrice: number;
}

export default function ProductOrderSection(props: Props) {
  const {baseUrl} = Config();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [successModal, setSuccessModal] = useState<boolean>(false);
  const [countOf, setCountOf] = useState(1);
  const router = useRouter();
  const isLogin = useRecoilValue(userLoginState);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const onClickCount = (count: number) => {
   
    if (count === 0) {
      Swal.fire({
        toast: true,
        text: "최소 수량은 1개 입니다.",
        position: "top",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        color: "#067040",
      });
      return;
    }
    else if ( count > 3) {
      Swal.fire({
        toast: true,
        text: "최대 수량은 3개 입니다.",
        position: "top",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
      return;
    }
    setCountOf(count);
  };

  const onClickPurchase = () => {
    router.push(`/buypage`);
    console.log("구매하기");
  };

  const onClickCart = () => {
    if (isLogin.isLogin) {
      console.log("장바구니 담기");
     
      axios.post(`${baseUrl}/api/v1/cart`,{
        productId: props.productId,
          productAmount: countOf,
      }, {
          headers: {
            Authorization: `Bearer ${isLogin.accessToken}`
          }
      }).then((res) => {
            Swal.fire({
              toast: true,
              text: "장바구니에 상품을 담았습니다.",
              position: "top",
              showConfirmButton: false,
              timer: 2000,
              timerProgressBar: true,
              color: "#067040",
            });
            setSuccessModal(true);
            setIsOpen(false);
          })
          .catch(err => {
            console.log(err);
            if (err.data === "ERROR-BR-004") {
              Swal.fire({
                icon: "error",
                title: "Error!",
                text: "장바구니에 상품이 가득 찼습니다.",
              });
            }
          });
      // RequestCartInsert({
      //   userId: isLogin.userId,
      //   productId: props.productId,
      //   count: countOf,
      // })
      //   .then((res) => {
      //     Swal.fire({
      //       toast: true,
      //       text: "장바구니에 상품을 담았습니다.",
      //       position: "top",
      //       showConfirmButton: false,
      //       timer: 2000,
      //       timerProgressBar: true,
      //       color: "#067040",
              
      //     });
      //     setSuccessModal(true);
      //     setIsOpen(false);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //     if (err.data === "ERROR-BR-004") {
      //       Swal.fire({
      //         icon: "error",
      //         title: "Error!",
      //         text: "장바구니에 상품이 가득 찼습니다.",
      //       });
      //     }
      //   });
    } else {
      Swal.fire({
        icon: "info",
        title: "알림!",
        text: "로그인 하세요!",
        customClass: {
          confirmButton: "btn btn-primary",
        },
        confirmButtonText: "로그인 하러 가기",
      }).then((result) => {
        if (result.isConfirmed) {
          router.push("/login");
        }
      });
      setIsOpen(false);
      
    }
  };

  return (
    <>
    <SuccessViewModal 
      isModalOpen={successModal}
      setIsModalOpen={setSuccessModal}
    />
      <div
        className={
          isOpen ? myStyle.productOrderSectionOpen : myStyle.productOrderSection
        }
      >
        {!isOpen ? <OrderToggleButton onClick={handleOpen} /> : null}
        {!isOpen ? (
          <ButtonUi type='button' text='구매하기' handler={handleOpen} size='large' colorType='primary'/>
        ) : (
          <div className={myStyle.productOrderSectionOpenBottomWrap}>
            <Image
              src="/assets/images/icons/shopping-cart.svg"
              width={30}
              height={30}
              alt='cart'
              onClick={onClickCart}
            />
            <ButtonUi type="button" text="선물하기" link="/" size="medium" colorType="secondary" />
            <ButtonUi type="button" text="구매하기" handler={onClickPurchase} size="medium" colorType="primary" />
          </div>
        )}
      </div>
      <Sheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        detent="content-height"
        style={{
          zIndex: 100,
        }}
        
      >
        <Sheet.Container>
          <Sheet.Content>
            <div
              style={{
                height: "300px",
                boxSizing: "border-box",
                paddingTop: "1rem",
              }}
            >
              <OrderToggleButton onClick={() => setIsOpen(false)} />
              <div className={myStyle.greyWrap}>
                <div className={myStyle.greyboxWrap}>
                  <div className={myStyle.greybox}>
                    <div className={myStyle.title}>{props.productName}</div>

                    <div className={myStyle.QtyCountWrap}>
                      <div className={myStyle.QtyCount}>
                        <div className={countOf === 1 ? myStyle.disabled : ''}>
                          <Image
                            src="/assets/images/icons/minus.png"
                            onClick={() => onClickCount(countOf - 1)}
                            width={20}
                            height={20}
                            alt='-Button'
                          />
                        </div>
                        <span>{countOf}</span>
                        <div>
                        <Image
                            src="/assets/images/icons/add.png"
                            onClick={() => onClickCount(countOf + 1)}
                            width={20}
                            height={20}
                            alt='+Button'
                          />
                        </div>
                      </div>
                      <div className={myStyle.priceBold}>
                        {(props.productPrice * countOf).toLocaleString("KR-kn")}
                        원
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator color="lightgrey" gutter={0.6} />

              <div className={myStyle.bottomPriceWrap}>
                합계{" "}
                <span className={myStyle.rightBottomBoldPrice}>
                  {(props.productPrice * countOf).toLocaleString("KR-kn")}원
                </span>
              </div>
            </div>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    </>
  );
}


const SuccessViewModal = (props:{isModalOpen:boolean, setIsModalOpen:Dispatch<SetStateAction<boolean>>}) => {

  if (!props.isModalOpen)  {return null;}

  return (
    <div className={myStyle.productSuccessWrap}>
      <div className={myStyle.notiWrap}>
        <div className={myStyle.noti}>
          <p>장바구니에 추가 되었습니다.</p>
          <Image
            src="/assets/images/icons/close.png"
            alt="close-button"
            width={20}
            height={20}
            onClick={()=>props.setIsModalOpen(false)}
          />
        </div>
        <div className={myStyle.buttonWrap}>
          <ButtonUi 
            type="button"
            text="장바구니로 이동"
            size="medium"
            colorType="secondary"
            link='/cart'
          />
          <ButtonUi 
            type="button"
            text="상품 더보기"
            size="medium"
            colorType="primary"
            link='/store'
          />

        </div>
      </div>
    </div>
  );
}

export const OrderToggleButton = styled.div`
  width: 40px;
  height: 5px;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  margin-bottom: 1rem;
`;
