import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import logo from './murphyshawaii.png';
import image from './murphyshawaiilogo.png'
import { Container, Header, Menu, Icon, Dropdown, Grid, List, GridColumn } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <div><img className={'image'} src={logo}/></div>
            <Menu.Item position={'right'}><a href="#"> Home</a></Menu.Item>
            <Menu.Item>
              <Dropdown text={'About Us'}/>
            </Menu.Item>
            <Menu.Item>
              <Dropdown text={'St. Patrick\'s Day'}/>
            </Menu.Item>
            <Menu.Item>
              <Dropdown text={'Menus'}/>
            </Menu.Item>
            <Menu.Item>
              <Dropdown text={'Bar'}/>
            </Menu.Item>
            <Menu.Item><Icon name="search"/></Menu.Item>
          </Container>
        </Menu>

    )
  }
}

class MiddleSection extends React.Component {
  render() {
    return (
        <div class="center-image">

          <Container><Grid columns={2}>
            <Grid.Column>
              <img class="logo" src={image}/>
            </Grid.Column>
            <Grid.Column>
              <div className={"white center-text"}>A traditional downtown saloon and eatery located in Honolulu Financial
                District, just one block off the waterfront, Murphy's has been a haven for mariners, businessmen and
                locals since 1891
              </div>
            </Grid.Column>
          </Grid>
        </Container></div>
    )
  }
}

class BottomFooter extends React.Component {
  render() {
    return (
        <div className="green-background">
          <Container><Grid columns={3}>
            <Grid.Column>
              <div className="text">Lunch</div>
            <hr/>
              <List>
                <List.Item>
                  <div class="white">Monday-Friday: 11:00am - 2:30pm</div>
                </List.Item>
                <List.Item>
                  <div class="white">Saturday-Sunday: Not open for lunch</div>
                </List.Item>
              </List>
            </Grid.Column>

            <Grid.Column>
              <div className="text">Bar</div>
              <hr/>
              <List>
                <List.Item>
                  <a className="white">Monday-Friday from 11:00am</a>
                </List.Item>
                <List.Item>
                  <a className="white">Saturday-Sunday from 4:00pm</a>
                </List.Item>
              </List>
            </Grid.Column>

            <Grid.Column>
              <div className="text">Dinner</div>
              <hr/>
              <List>
                <List.Item>
                  <a className="white">Monday-Saturday:5:30pm - 10:pm</a>
                </List.Item>
                <List.Item>
                  <a className="white">Sunday:5:00pm - 9:00pm </a>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid>
          </Container>
        </div>
    )
  }
}

class Murphys extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <MiddleSection/>
          <BottomFooter/>
        </div>
    );
  }
}

ReactDOM.render(<Murphys/>, document.getElementById('root'));
