import React, { FC, useCallback, useState } from 'react'
import { ImageInput, ImagePreview } from '../atoms'
import { PhotoIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

type Props = {
  imageUrl?: string
}

const ImageField: FC<Props> = ({ imageUrl }) => {
  const [portfolioImage, setPortfolioImage] = useState<File | null>(null)

  const handleSetImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.currentTarget?.files && e.currentTarget.files[0]) {
        setPortfolioImage(e.currentTarget.files[0])
      }
    },
    [],
  )

  const handleResetImage = useCallback(() => {
    setPortfolioImage(null)
  }, [])

  return (
    <>
      {imageUrl ? (
        <Image src={imageUrl} height={328} width={640} alt={imageUrl} />
      ) : (
        <div className="relative h-60 w-2/3 rounded-xl bg-slate-300 pt-6">
          <ImageInput
            className="absolute h-full w-full opacity-0"
            onChange={handleSetImage}
            disabled={portfolioImage ? true : false}
          />
          <div className="just flex items-center justify-center">
            {portfolioImage ? (
              <div>
                <button
                  type="button"
                  aria-label="Close"
                  onClick={handleResetImage}
                />
                <ImagePreview image={portfolioImage} height={200} width={200} />
              </div>
            ) : (
              <PhotoIcon className="absolute top-1/2 right-1/2 h-6 w-6" />
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default ImageField
