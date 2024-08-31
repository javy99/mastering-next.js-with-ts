'use client'
import { CldUploadWidget, CldImage } from 'next-cloudinary';
import { useState } from 'react';

interface CloudinaryResult {
    public_id: string;
}

const UploadPage = () => {
    const [publicId, setPublicId] = useState<string>("");

    const handleSuccess = (result: any) => {
        if (result.event !== 'success') return;
        const info = result.info as CloudinaryResult;
        setPublicId(info.public_id);
    };

    return (
        <>
            {publicId && <CldImage src={publicId} width={270} height={180} alt='Uploaded Image' />}
            <CldUploadWidget
                uploadPreset='fklwbau8'
                onSuccess={handleSuccess}
                onError={(error) => console.error('Upload error:', error)}
            >
                {({ open }) =>
                    <button
                        className="btn btn-primary"
                        onClick={() => open()}
                    >
                        Upload
                    </button>}
            </CldUploadWidget>
        </>
    );
}

export default UploadPage;
