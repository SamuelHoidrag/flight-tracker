import React from 'react'
import { Menu, Dropdown, Button } from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons'
import { FacebookOutlined } from '@ant-design/icons'
import Booking from '../../images/Booking.png'
import Kayak from '../../images/Kayak.png'
import Open from '../../images/Open.webp'
import Agoda from '../../images/Agoda.png'
import Priceline from '../../images/Priceline.png'
import Rent from '../../images/Rentalcars.png'

const menu = (
  <Menu>
    <Menu.Item key="1" icon={<UserOutlined />}>
      1st menu item
    </Menu.Item>
    <Menu.Item key="2" icon={<UserOutlined />}>
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3" icon={<UserOutlined />}>
      3rd menu item
    </Menu.Item>
  </Menu>
)

const Footer = () => {
  return (
    <div className="footerMainBox">
      <div className="contactDetailsBox">
        <div>
          <h6>Companie</h6>
          <p>Despre</p>
          <p>Cariere</p>
          <p>Mobile</p>
          <p>Descoperă</p>
          <p>Cum lucrăm</p>
          <p>Vouchere momondo</p>
        </div>
        <div>
          <h6>Contact</h6>
          <p>Ajutor/Întrebări frecvente</p>
          <p>Presă</p>
          <p>Afiliați</p>
        </div>
        <div>
          <h6>Mai mult</h6>
          <p>Taxele companiilor aeriene</p>
          <p>Companii aeriene</p>
        </div>
        <div>
          <h6>Site / Monedă</h6>
          <div className="dropdownFooter">
            <Dropdown overlay={menu}>
              <Button>
                Romania <DownOutlined />
              </Button>
            </Dropdown>
            <Dropdown overlay={menu}>
              <Button>
                Euro <DownOutlined />
              </Button>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="privacyFooter">
        <p>Privacy</p>
        <p>Termeni & condiții</p>
        <p>Imprint</p>
        <p>©2022 momondo</p>
      </div>
      <div className="facebookFooter">
        <FacebookOutlined />
      </div>
      <div className="bookingFooter">
        <p>
          momondo face parte din Booking Holdings Inc., liderul mondial în
          călătorii online și servicii relaționate.
        </p>
      </div>
      <div className="logoFooter">
        <img src={Booking} alt="Booking Logo" />
        <img src={Kayak} alt="Booking Logo" />
        <img src={Open} alt="Booking Logo" />
        <img src={Priceline} alt="Booking Logo" />
        <img src={Agoda} alt="Booking Logo" />
        <img src={Rent} alt="Booking Logo" />
      </div>
    </div>
  )
}

export default Footer
