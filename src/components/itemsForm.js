import React from 'react';

class ItemsForm extends React.Component {
  constructor(props){
    super(props)
    this.state={
      itemType: props.item ? props.item.itemType : '',
      name: props.item ? props.item.name : '',
      unit: props.item ? props.item.unit : '',
      saleInformation: {
        rate: props.item ? props.item.saleInformation.rate : '',
        account: props.item ? props.item.saleInformation.account : '',
        description: props.item ? props.item.saleInformation.description : ''
      },
      purchaceInformation: {
        rate: props.item ? props.item.purchaceInformation.rate : '',
        account: props.item ? props.item.purchaceInformation.account : '',
        description: props.item ? props.item.purchaceInformation.description : ''
      },
      tax: '',
      error: ''

    }
  }

  onChangeName = (e) => {
    const name = e.target.value;
    this.setState({ name });
  }

  onChangeType = (e) => {
    if (e.target.value === 'product') {
      this.setState({ itemType: 'product' })
    } else if (e.target.value === 'service') {
      this.setState({ itemType: 'service' })
    }
  }

  onChangeunit = (e) => {
    const unit = e.target.value;
    this.setState({ unit });
  }

  onChangeSaleRate = (e) => {
    const rate = e.target.value;
    this.setState(prevState => ({
      saleInformation: {
      ...prevState.saleInformation,
      rate
      }
    }));
  }

  onChangeSaleAccount = (e) => {
    const account = e.target.value;
    this.setState(prevState => ({
      saleInformation: {
      ...prevState.saleInformation,
      account
      }
    }));
  }

  onChangeSaleDescription = (e) => {
    const description = e.target.value;
    this.setState(prevState => ({
      saleInformation: {
      ...prevState.saleInformation,
      description
      }
    }));
  }

  onChangePurchaseRate = (e) => {
    const rate = e.target.value;
    this.setState(prevState => ({
      purchaceInformation: {
      ...prevState.purchaceInformation,
      rate
      }
    }));
  }

  onChangePurchaseAccount = (e) => {
    const account = e.target.value;
    this.setState(prevState => ({
      purchaceInformation: {
      ...prevState.purchaceInformation,
      account
      }
    }));
  }

  onChangePurchaseDescription = (e) => {
    const description = e.target.value;
    this.setState(prevState => ({
      purchaceInformation: {
      ...prevState.purchaceInformation,
      description
      }
    }));
  }

  onChangetax = (e) => {
    const tax = e.target.value;
    this.setState({ tax })
  }
  onSubmit = (e) => {
      e.preventDefault();

    if (!this.state.name) {
      this.setState({ error: 'لطفا فیلدهای مورد نیاز را تکمیل کنید.' })
    } else {
      this.setState({error: ''})
      this.props.onSubmit({
        name: this.state.name,
        unit: this.state.unit,
        itemType: this.state.itemType,
        saleInformation: this.state.saleInformation,
        purchaceInformation: this.state.purchaceInformation,
        tax: this.state.tax
      })
    }
  }


  render() {
    return (
      <div>
      <p>{this.state.error}</p>

        <form onSubmit={this.onSubmit}>
          <select onChange={this.onChangeType}>
            <option value="product">کالا</option>
            <option value="service">خدمات</option>
          </select>
          <input
            type="text"
            placeholder='نام کالا یا خدمات'
            value={this.state.name}
            onChange={this.onChangeName}
          />
          <input
            type='text'
            placeholder='واحد'
            value={this.state.unit}
            onChange={this.onChangeunit}
          />
          <input
            type='text'
            placeholder='قیمت'
            value={this.state.saleInformation.rate}
            onChange={this.onChangeSaleRate}
          />
          <input
            type='text'
            placeholder='حساب'
            value={this.state.saleInformation.account}
            onChange={this.onChangeSaleAccount}
          />
          <input
            type='text'
            placeholder='توضیحات'
            value={this.state.saleInformation.description}
            onChange={this.onChangeSaleDescription}
          />
          <input
            type='text'
            placeholder='قیمت'
            value={this.state.purchaceInformation.rate}
            onChange={this.onChangePurchaseRate}
          />
          <input
            type='text'
            placeholder='حساب'
            value={this.state.purchaceInformation.account}
            onChange={this.onChangePurchaseAccount}
          />
          <input
            type='text'
            placeholder='توضیحات'
            value={this.state.purchaceInformation.description}
            onChange={this.onChangePurchaseDescription}
          />
          <input
            type='number'
            placeholder='مالیات'
            value={this.state.tax}
            onChange={this.onChangetax}
          />
          <button>ثبت</button>
        </form>
      </div>
    )
  }
}

export default ItemsForm;
