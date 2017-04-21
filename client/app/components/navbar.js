import React from 'react';
import RESET from '../database.js';
import {Link} from 'react-router';
import {updateUserData, getUserData, updateSearchUserData} from '../server';


export default class NAVBAR extends React.Component {

constructor()
{
  super()
  this.state = {
    user: {},
    category: " ",
    searchTerm :" "


  }
}

  handleChange(e) {
    e.preventDefault();
    var se = document.getElementById("categories").value; //get the currently selected value from SELECT for the category



     this.setState({category: se,
                    searchTerm : e.target.value});



  }


  // handleSearchClick(e){
	// 	e.preventDefault();
  //
	// 	if (e.button == 0){
  //
  //     var callbackFunction = (userData) => {
	// 		this.setState({user: userData});
	// 	}
	// 	getUserData(this.props.user, callbackFunction);
  //
  //   updateSearchUserData
  //   var data = {
  //      searchGory: this.state.category,
  //      searchTerm: this.state.value
  //   };
  //
	// 	updateSearchUserData(data, this.props.user);
  //
  //
	// 	}
	// }


  render() {

    return (
      <div >

      <nav className="navbar navbar-default navbar-fixed-top">

          <div className="container" id ="navContainer">

              <div className="row row1">

                  <ul className="largenav pull-right">
                      <li className="upper-links"><a className="links" href="contact.html">Contact Us</a></li>
                      <li className="upper-links"><a className="links" href="help.html">Help</a></li>

                      {/*dummy links*/}
                        <li className="upper-links"><Link to={"/classPage/" + 1}>Classpage</Link></li>



                      <li className="upper-links"><Link to={"/submitItem/" + this.props.user}>sell item</Link></li>
                      <li className="upper-links"><Link to={"/profile/" + this.props.user}>Profile</Link></li>


                  </ul>

              </div>
              <div className="row row2">

                             <div className="col-md-2">
                                 <Link to={"/"}><span className="largenav" id="largenavlogo"><img src="img/uthrift.png" alt="logo" /></span></Link>
                             </div>



                             <div className="uthrift-navbar-search col-md-8" id="navSearch" >

                                 <form role="search" className="col-md-12" id = "searchForm">

                                   <div className="col-md-3" id = "catogory-Select" >
                                     <select id="categories" className="form-control dropdown">
                                      <option value = " ">Select Category</option>
                                      <option value="Textbooks">Textbooks</option>
                                      <option value="Clothing">Clothing</option>
                                      <option value="Tech">Tech</option>
                                      <option value="Events">Events</option>
                                      <option value="Furniture">Furniture</option>
                                      <option value="Miscellaneous">Miscellaneous</option>
                                      <option value="Classes">Classes</option>
                                    </select>
                                   </div>


                                     <input className="uthrift-navbar-input col-md-8"  type="text" placeholder="Search UThrift..." name="search"  value={this.state.value} onChange={(e) => this.handleChange(e)} />
                                    <Link to={"/searchPage/" + this.props.user + "/" + this.state.category +  "/"  + this.state.searchTerm} >
                                     <button className="uthrift-navbar-button col-md-1"  >

                                         <svg width="15px" height="15px">
                                             <path d="M11.618 9.897l4.224 4.212c.092.09.1.23.02.312l-1.464 1.46c-.08.08-.222.072-.314-.02L9.868 11.66M6.486 10.9c-2.42 0-4.38-1.955-4.38-4.367 0-2.413 1.96-4.37 4.38-4.37s4.38 1.957 4.38 4.37c0 2.412-1.96 4.368-4.38 4.368m0-10.834C2.904.066 0 2.96 0 6.533 0 10.105 2.904 13 6.486 13s6.487-2.895 6.487-6.467c0-3.572-2.905-6.467-6.487-6.467 "></path>
                                         </svg>

                                     </button>
                                     </Link>
                                 </form>
                             </div>
                             <div className="cart largenav col-md-2">
                               <RESET />
                                 {/*}<a className="cart-button">
                                     <svg className="cart-svg " width="16 " height="16 " viewBox="0 0 16 16 ">
                                         <path d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86 " fill="#fff "></path>
                                     </svg> Watching
                                 </a>*/}

                             </div>
                         </div>
          </div>
      </nav>
      <script src="../database.js"></script>
      </div>

    )
  }
}