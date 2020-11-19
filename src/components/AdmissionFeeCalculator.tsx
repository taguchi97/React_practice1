import React, { Component } from 'react'
import Detail from './Detail'
import Summary from './Summary'
import { FeeClassification } from '../types/type'

type AdmissionFeeCalculatorState = {
  feeClassifications: FeeClassification[]
}

class AdmissionFeeCalculator extends Component<{}, AdmissionFeeCalculatorState> {
  constructor(props: {}) {
    super(props)
    const adults: FeeClassification = {
      name: "大人",
      discription: "",
      unitPrice: 1000,
      numOfPeople: 0,
      totalPrice: 0
    }
    const students: FeeClassification = {
      name: "学生",
      discription: "中学生・高校生",
      unitPrice: 700,
      numOfPeople: 0,
      totalPrice: 0
    }
    const children: FeeClassification = {
      name: "こども",
      discription: "小学生",
      unitPrice: 300,
      numOfPeople: 0,
      totalPrice: 0
    }
    const infant: FeeClassification = {
      name: "幼児",
      discription: "未就学児",
      unitPrice: 0,
      numOfPeople: 0,
      totalPrice: 0
    }
    this.state = {
      feeClassifications:
        [
          adults,
          students,
          children,
          infant
        ]
    }
  }

  handleNumOfPeopleChange(idx: number, num: number) {
    const currentFC = this.state.feeClassifications[idx]
    const newTotalPrice = currentFC.unitPrice * num
    const newFC: FeeClassification = Object.assign(currentFC, { numOfPeople: num, totalPrice: newTotalPrice })

    const feeClassifications = this.state.feeClassifications.slice()
    feeClassifications[idx] = newFC
    this.setState({ feeClassifications: feeClassifications })
  }

  render() {
    const details = this.state.feeClassifications.map((fc, idx) => {
      return (
        <Detail
          key={idx.toString()}
          classification={fc}
          onNumOfPeopleChange ={n => this.handleNumOfPeopleChange(idx, n)}
        />
      )
    })
    const numOfPeople = this.state.feeClassifications.map(fc => fc.numOfPeople).reduce((p, c)=>(p+c))
    const totalAmount = this.state.feeClassifications.map(fc => fc.totalPrice).reduce((p, c) => p + c)

    return (
      <>
        {details}
        <Summary 
          numOfPeople = {numOfPeople}
          totalAmount = {totalAmount}
        />
      </>
    )
  }
}

export default AdmissionFeeCalculator