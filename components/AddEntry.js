import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { getMetricMetaInfo, timeToString } from '../utils/helpers'
import UdaciSlider from './Slider'
import UdaciStepper from './Stepper'
import DateHeader from './DateHeader'
import { submitEntry, removeEntry } from '../utils/api'
import { connect } from 'react-redux'
import { addEntry } from '../actions'

function SubmitBtn({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text>SUBMIT</Text>
        </TouchableOpacity>
    )
}

class AddEntry extends Component {
    state = {
        run: 0,
        bike: 0,
        swim: 0,
        sleep: 0,
        eat: 0
    }
    increment = (metric) => {
        const { max, step } = getMetricMetaInfo(metric) 
        this.setState((state) => {
            const count = state[metric] + step
            return {
                ...state,
                [metric]: count > max ? max : count
            }
        })
    }
    decrement = (metric) => {
        this.setState((state) => {
            const count = state[metric] - getMetricMetaInfo(metric).step
            return {
                ...state,
                [metric]: count < 0 ? 0 : count,
            }
        })
    }
    slide = (metric, value) => {
        this.setState(() => ({
            [metric]: value,
        }))
    }
    submit = () => {
        const key = timeToString()
        const entry = this.state

        this.props.dispatch(addEntry({
            [key]: entry,
        }))

        this.setState(() => ({
            run: 0,
            bike: 0,
            swim: 0,
            sleep: 0,
            eat: 0
        }))

        submitEntry({ key, entry })
    }
    reset = () => {
        const key = timeToString()

        removeEntry(key)
    }
    render() {
        const metaInfo = getMetricMetaInfo()
        return (
            <View>
                <DateHeader date={(new Date()).toLocaleDateString()}/>
                {Object.keys(metaInfo).map((key) => {
                    const { getIcon, type, ...rest } = metaInfo[key]
                    const value = this.state[key] 
                    return (
                        <View key={key}>
                            {getIcon()}
                            {type === 'slider' ? 
                                <UdaciSlider value={value} 
                                onChange={(value) => this.slide(key, value)}
                                {...rest}
                                ></UdaciSlider> : 
                                <UdaciStepper
                                value={value}
                                onIncrement={() => { this.increment(key)} }
                                onDecrement={() => {this.decrement(key) }}
                                {...rest}
                                ></UdaciStepper>
                            }
                        </View>
                    )
                })}
                <SubmitBtn onPress={this.submit} />
            </View>
        );
    }
}

export default connect()(AddEntry)