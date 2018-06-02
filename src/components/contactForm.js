import React from 'react';


class ContactForm extends React.Component {
  constructor(props) {
    super(props)
  this.state ={
    firstName : props.contact ? props.contact.firstName : '',
    lastName : props.contact ? props.contact.lastName : '',
    company : props.contact ? props.contact.company : '',
    phone : props.contact ? props.contact.phone : '',
    mobile : props.contact ? props.contact.mobile : '',
    website : props.contact ? props.contact.website : '',
    address : props.contact ? props.contact.address : '',
    error: ''
  }
  }

  firstNameChanged = (e) => {
    const firstName = e.target.value;
    this.setState({firstName});
  }
  lastNameChanged = (e) => {
    const lastName = e.target.value;
    this.setState({lastName});
  }
  companyChanged = (e) => {
    const company = e.target.value;
    this.setState({company});
  }
  phoneChanged = (e) => {
    const phone = e.target.value;
    this.setState({phone});
  }
  mobileChanged = (e) => {
    const mobile = e.target.value;
    this.setState({mobile});
  }
  addressChanged = (e) => {
    const address = e.target.value;
    this.setState({address});
  }
  websiteChanged = (e) => {
    const website = e.target.value;
    this.setState({website});
  }

  onSubmit = (e) => {
      e.preventDefault();

    if (!this.state.firstName || !this.state.lastName) {
      this.setState({ error: 'لطفا فیلدهای مورد نیاز را تکمیل کنید.' })
    } else {
      this.setState({error: ''})
      this.props.onSubmit({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        contactType: this.state.contactType,
        company: this.state.company,
        phone: this.state.phone,
        mobile: this.state.mobile,
        address: this.state.address,
        website: this.state.website
      })
    }
  }

  render() {
    return (
        <div>
          <p>{this.state.error}</p>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="نام"
              value={this.state.firstName}
              onChange={this.firstNameChanged}
            />
            <input
              type="text"
              placeholder="نام خانوادگی "
              value={this.state.lastName}
              onChange={this.lastNameChanged}
            />
            <input
              type="text"
              placeholder="نام شرکت"
              value={this.state.company}
              onChange={this.companyChanged}
            />
            <input
              type="number"
              placeholder="تلفن"
              value={this.state.phone}
              onChange={this.phoneChanged}
            />
            <input
              type="text"
              placeholder="موبایل"
              value={this.state.mobile}
              onChange={this.mobileChanged}
            />
            <input
              type="text"
              placeholder="وبسایت"
              value={this.state.website}
              onChange={this.websiteChanged}
            />
            <input
              type="text"
              placeholder="آدرس"
              value={this.state.address}
              onChange={this.addressChanged}
            />
            <button>ثبت</button>
          </form>
        </div>
    )
  }
}


export default ContactForm;
