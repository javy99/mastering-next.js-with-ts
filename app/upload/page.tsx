'use client'
import { CldUploadWidget } from 'next-cloudinary';

const UploadPage = () => {
    return (
        <CldUploadWidget uploadPreset='fklwbau8'>
            {({ open }) =>
                <button
                    className="btn btn-primary"
                    onClick={() => open()}>Upload</button>}
        </CldUploadWidget>
    )
}

export default UploadPage