import React from 'react'
import { Menu } from 'antd'

const { SubMenu } = Menu

const VacantionHouses = () => {
  return (
    <div>
      <section className="vacantionHeader">
        <h2>Case de vacanță și cazări</h2>
        <p>Compară oferte la hoteluri, apartamente și case de vacanță</p>
        <p>
          De la case de vacanță la apartamente și hoteluri mai tradiționale, cu
          momondo găsești și compari cele mai bune locuri din lume în care să te
          cazezi.
        </p>
      </section>
      <section className="hotelsDropdownBox">
        <div>
          <Menu style={{ width: 300 }} mode="inline">
            <SubMenu key="sub1" title="Hoteluri din Roma">
              <Menu.Item key="2">Option 1</Menu.Item>
              <Menu.Item key="3">Option 2</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title="Hoteluri din Viena">
              <Menu.Item key="4">Option 3</Menu.Item>
              <Menu.Item key="5">Option 4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title="Hoteluri din Atena">
              <Menu.Item key="6">Option 5</Menu.Item>
              <Menu.Item key="7">Option 6</Menu.Item>
            </SubMenu>
            <SubMenu key="sub8" title="Hoteluri din Puerto de la Cruz">
              <Menu.Item key="9">Option 7</Menu.Item>
              <Menu.Item key="10">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" title="Hoteluri din Palermo">
              <Menu.Item key="11">Option 13</Menu.Item>
              <Menu.Item key="12">Option 14</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
        <div>
          <Menu style={{ width: 300 }} mode="inline">
            <SubMenu key="sub1" title="Hoteluri din Roma">
              <Menu.Item key="13">Option 1</Menu.Item>
              <Menu.Item key="14">Option 2</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title="Hoteluri din Viena">
              <Menu.Item key="15">Option 3</Menu.Item>
              <Menu.Item key="16">Option 4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title="Hoteluri din Atena">
              <Menu.Item key="17">Option 5</Menu.Item>
              <Menu.Item key="18">Option 6</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" title="Hoteluri din Puerto de la Cruz">
              <Menu.Item key="19">Option 7</Menu.Item>
              <Menu.Item key="20">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" title="Hoteluri din Palermo">
              <Menu.Item key="21">Option 13</Menu.Item>
              <Menu.Item key="22">Option 14</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
        <div>
          <Menu style={{ width: 300 }} mode="inline">
            <SubMenu key="sub1" title="Hoteluri din Roma">
              <Menu.Item key="23">Option 1</Menu.Item>
              <Menu.Item key="24">Option 2</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title="Hoteluri din Viena">
              <Menu.Item key="25">Option 3</Menu.Item>
              <Menu.Item key="26">Option 4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title="Hoteluri din Atena">
              <Menu.Item key="27">Option 5</Menu.Item>
              <Menu.Item key="28">Option 6</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" title="Hoteluri din Puerto de la Cruz">
              <Menu.Item key="29">Option 7</Menu.Item>
              <Menu.Item key="30">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" title="Hoteluri din Palermo">
              <Menu.Item key="31">Option 13</Menu.Item>
              <Menu.Item key="32">Option 15</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      </section>
    </div>
  )
}

export default VacantionHouses
