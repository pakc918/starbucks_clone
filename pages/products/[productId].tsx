
import Separator_large from '@/components/ui/Separator_large'
import ItemNoticeWidget from '@/components/widgets/ItemNoticeWidget'
import { eventProductType } from '@/types/fetchDataType'
import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import Config from '@/configs/config.export'
import axios from 'axios'
import ImageSizeReturn from '@/components/ui/ImageSizeReturn'
import ProductHeaderImg from '@/components/page/product/ProductHeaderImg'
import ProductInfo from '@/components/page/product/ProductInfo'
import ProductOrderSection from '@/components/page/product/ProductOrderSection'

export default function Products() {

    const { query } = useRouter();
    const { baseUrl } = Config();

    const [productData, setProductData] = useState<eventProductType>()

    

    useEffect(() => {
        const getFetch = async () => {
            const res = await axios.get(`${baseUrl}/api/v1/product/get/${query.productId}`)
            console.log(res.data)
            setProductData(res.data.data)
        }

        getFetch()
    }, [query.productId, baseUrl])

    return (
        <>
            {
                productData && (
                    <div className="container">
                        <ProductHeaderImg 
                            productData={productData}
                        />

                        <ProductInfo 
                            productData={productData}
                        />
                        <Separator_large color='#f7f7f7' height={10} />
                        <section id="recommand-md2">
                            <div>
                                <p className="item-product-info">상품 정보</p>
                            </div>
                            {
                                productData.productImageList && productData.productImageList.map((img) => (
                                    <div className="border-color" key={img.id}>
                                        <ImageSizeReturn imgUrl={img.imgUrl} imgAlt={img.imgAlt} />
                                    </div>
                                ))
                            }
                        </section>
                        <ItemNoticeWidget />
                        <ProductOrderSection productId={productData.id} productName={productData.name} productPrice={productData.price} />                            
                    </div >
                )
            }
        </>
    )
}