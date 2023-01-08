import React from 'react';
import { Row, Col, Image } from 'antd';


const ImagesList = ({ images }) => {
  return (
    <Row gutter={[16, 16]}>
      {
        images.map(image => {
          return (
            <Col span={8} key={image._id}>
              <Image
                key={image._id}
                src={image.image_url}
              />
            </Col>
          )
        })
      }
    </Row>
  )
}

export default ImagesList