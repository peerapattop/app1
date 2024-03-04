import React from "react";
import { useForm } from 'react-hook-form'

export default function FormValidation() {
    const cats = [['100', 'ไอที'], ['200', 'เครื่องจักรกล'], ['300', 'เคมีภัณฑ์']];
    const opts = ['Option 1', 'Option 2', 'Option 3'];
    const { register, handleSubmit, formState: { errors } } = useForm();
    const inputFile = React.useRef(); // Corrected the ref initialization

    const onSubmitForm = (data, event) => {
        let maxNumFiles = 3;
        let maxSize = 300;
        if (inputFile.current.files.length > maxNumFiles) {
            alert(`เลือกได้ไม่เกิน ${maxNumFiles} ไฟล์`);
            event.preventDefault();
            return;
        }
        for (let f of inputFile.current.files) {
            if (f.size > maxSize * 1000) {
                alert(`ขนาดของแต่ละไฟล์ต้องไม่เกิน ${maxSize} KB`);
                event.preventDefault();
                return;
            }
        }
        // Proceed with form submission if validations pass
    }

    const err = {
        fontSize: 'smaller',
        color: 'red'
    };

    return (
        <div className="mt-3 mb-5 mx-auto p-3 rounded" style={{ width: '400px', background: '#cee' }}>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <div className="form-group mb-3">
                    <label htmlFor="cats" className="form-label">หมวดหมู่ *</label>
                    <select id="cats" className="form-select form-select-sm" {...register('category', { required: true })}>
                        {cats.map((item, index) => (
                            <option key={index} value={item[0]}>{item[1]}</option>
                        ))}
                    </select>
                    {errors.category && <div style={err}>กรุณาระบุหมวดหมู่</div>}
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="name">ชื่อสินค้า *</label>
                    <input type='text' id='name' name='name' maxLength='50'
                        className='form-control form-control-sm'
                        {...register('name', { required: true, maxLength: 30 })} />
                    {errors.name && <div style={err}>กรุณาระบุชื่อสินค้า</div>}
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="price">ราคาสินค้า *</label>
                    <input type='number' id='price' name='price' min='0' step='any'
                        className="form-control form-control-sm"
                        {...register('price', { required: true, validate: value => parseFloat(value) > 0 })} />
                    {errors.price && <div style={err}>กำหนดราคาสินค้าเป็นตัวเลขมากกว่า 0</div>}
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="detail">รายละเอียดสินค้า *</label>
                    <textarea id='detail' name='detail' rows='2' maxLength="250"
                        className="form-control form-control-sm"
                        {...register('detail', { required: true, minLength: 1, maxLength: 200 })}>
                    </textarea>
                    {errors.detail && <div style={err}>ต้องกำหนดรายละเอียดสินค้า</div>}
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="dateAdded">วันที่เพิ่มสินค้า *</label>
                    <input type="date" id="dateAdded" name="dateAdded" className="form-control form-control-sm" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="file" className="form-label">
                        ภาพสินค้า * (ไม่เกิน 3 ไฟล์ ขนาดสูงสุด 300 KB/ไฟล์)
                    </label>
                    <input type='file' id="file" accept="image/*"
                        className="form-control form-control-sm" ref={inputFile} multiple />
                </div>
                <div>ออฟชันเพิ่มเติม</div>
                {opts.map((opt, i) => (
                    <div key={i} className="form-check form-check-inline mb-2">
                        <input type='checkbox' id={'opt' + i} value={opt}
                            className="form-check-input" />
                        <label htmlFor={'opt' + i} className="form-check-label">{opt}</label>
                    </div>
                ))}
                <div className="text-center mt-4">
                    <button type="submit" className="btn btn-primary btn-sm px-4">
                        OK
                    </button>
                </div>
            </form>
        </div>
    );
}
