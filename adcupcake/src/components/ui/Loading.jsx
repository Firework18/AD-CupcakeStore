import React from 'react'

export default function Loading() {
    return (
        <div className='flex justify-center'>
            <div className="card bg-base-100 w-96 shadow-sm p-50">
                <span className="loading loading-spinner loading-xl"></span>
            </div>

        </div>
    )
}
