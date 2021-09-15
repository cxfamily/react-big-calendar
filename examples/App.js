import React from 'react'
import Api from './Api'
import Intro from './Intro.md'
import { render } from 'react-dom'
import Layout from 'react-tackle-box/Layout'
import clsx from 'clsx'

import localizer from 'react-big-calendar/lib/localizers/globalize'
import globalize from 'globalize'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import reactStyle from 'react-big-calendar/lib/sass/styles.scss'
import styleDemo from './styles.scss'
import './prism.scss'
import Card from './Card'
import ExampleControlSlot from './ExampleControlSlot'
import Basic from './demos/basic'

const globalizeLocalizer = localizer(globalize)

let demoRoot =
  'https://github.com/intljusticemission/react-big-calendar/tree/master/examples/demos'

const DEFAULT_EXAMPLE = 'basic'

class Example extends React.Component {
  constructor(...args) {
    super(...args)

    this.state = {
      selected: DEFAULT_EXAMPLE,
      lang: 'cn',
    }
  }

  select = selected => {
    this.setState({ selected })
  }

  componentDidMount() {
    const hash = (window.location.hash || '').slice(1)
    this.select(hash || DEFAULT_EXAMPLE)
  }

  langChange() {
    this.setState({
      lang: this.state.lang === 'en' ? 'cn' : 'en',
    })
  }

  render() {
    let selected = this.state.selected
    let Current = Basic

    return (
      <div className={styleDemo.app}>
        <div className={styleDemo.jumbotron}>
          <div className={styleDemo.container}>
            <h1>
              Big Calendar{' '}
              <i className={clsx(styleDemo.fa, styleDemo['fa-calendar'])} />
            </h1>
            <p>such enterprise, very business.</p>
            <p>
              <a href="#intro">
                <i className={clsx(styleDemo.fa, styleDemo['fa-play'])} />{' '}
                Getting started
              </a>
              {' | '}
              <a href="#api">
                <i className={clsx(styleDemo.fa, styleDemo['fa-book'])} /> API
                documentation
              </a>
              {' | '}
              <a
                target="_blank"
                href="https://github.com/intljusticemission/react-big-calendar"
              >
                <i className={clsx(styleDemo.fa, styleDemo['fa-github'])} />{' '}
                github
              </a>
            </p>
          </div>
        </div>
        <div className={styleDemo.examples}>
          <Card className={styleDemo['examples--header']}>
            <Layout
              align="center"
              justify="space-between"
              style={{ marginBottom: 15 }}
            >
              <div className={styleDemo['examples--view-source']}>
                <a target="_blank" href={demoRoot + '/' + selected + '.js'}>
                  <strong>
                    <i className={clsx(styleDemo.fa, styleDemo['fa-code'])} />
                    {' View example source code'}
                  </strong>
                </a>
              </div>
              <div
                className={styleDemo.changeLang}
                onClick={() => {
                  this.langChange()
                }}
              >
                中英文切换/Chinese English switching:{' '}
                <span>{this.state.lang === 'en' ? 'English' : '中文'}</span>
              </div>
              <div>Basic Calendar</div>
            </Layout>
            <ExampleControlSlot.Outlet />
          </Card>
          <div className={styleDemo.example}>
            <Current
              localizer={globalizeLocalizer}
              lang={this.state.lang}
              reactStyle={reactStyle}
            />
          </div>
        </div>
        <div className={styleDemo.docs}>
          <div className={clsx(styleDemo.contain, styleDemo.section)}>
            <Intro />
          </div>
          <Api className={clsx(styleDemo.contain, styleDemo.section)} />
        </div>
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  render(<Example />, document.getElementById('app'))
})
