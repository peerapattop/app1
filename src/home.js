import React from 'react'

export default function Home(){
    return (
        <p style={{textAlign:'center'}}>
            <h3>ยินดีต้อนรับ</h3>
            รายชื่อ <a href="/products">สินค้า</a> ที่เรามีจำหน่าย <br/>
            แต่ท่านต้องเป็น <a href="/member">สมาชิก</a> ถึงจะสั่งซื้อได้ <br/>
            หากมีข้อสงสัย กรุณา <a href="contact">ติดต่อเรา</a>
        </p>    
        
    )
}