import React, { Component } from 'react';
import {
    Layout,
    Breadcrumb
} from 'antd';
import WorkTools from './WorkTools.comp'
import ComponentBuilder from '../../components/ComponentBuilder'
import GridBuilder from '../../components/GridBuilder'
require('./new-age.scss')

class WorkSpace extends Component {
    constructor(props) {
        super(props);

        this.state = {
            elements: new Array()
        }
    }

    render() {
        return (
            <Layout className='workspace'>
                <WorkTools />
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Layout.Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                        {this.state.elements}
                        <GridBuilder
                            components={
                                {
                                    'layoutMain': {
                                        type: "layout",
                                        config: {
                                            className: 'header',
                                            key: 'ProbandoKey'
                                        },
                                        children: {
                                            'header': {
                                                type: "div",
                                                config: {
                                                    className: 'masthead',
                                                    key: 'ProbandoKey'
                                                },
                                                children: {
                                                    "row": {
                                                        type: 'row',
                                                        config: {
                                                            className: 'header',
                                                            type: "flex",
                                                            justify: "center",
                                                            key: 'ProbandoKey'
                                                        },
                                                        children: {
                                                            'col': {
                                                                type: "col",
                                                                config: {
                                                                    className: 'masthead',
                                                                    key: 'ProbandoKey',
                                                                    xs: { span: 24 },
                                                                    lg: { span: 10 }
                                                                },
                                                                children: {
                                                                    'inputName1': {
                                                                        type: 'h1',
                                                                        text: 'New Age is an app landing page that will help you beautifully showcase your new mobile app, or anything else!'
                                                                    }
                                                                }
                                                            },
                                                            'col2': {
                                                                type: "col",
                                                                config: {
                                                                    className: 'pad',
                                                                    key: 'ProbandoKey',
                                                                    xs: { span: 24 },
                                                                    lg: { span: 10 }
                                                                },
                                                                children: {
                                                                    'inputName1': {
                                                                        type: 'p',
                                                                        text: 'Texto derecha, https://blackrockdigital.github.io/startbootstrap-new-age/#'
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            'download': {
                                                type: 'row',
                                                config: {
                                                    className: 'header',
                                                    type: "flex",
                                                    justify: "center",
                                                    key: 'ProbandoKey'
                                                },
                                                children: {
                                                    'col': {
                                                        type: "col",
                                                        config: {
                                                            className: 'masthead',
                                                            key: 'ProbandoKey',
                                                            xs: { span: 24 },
                                                            lg: { span: 10 }
                                                        },
                                                        children: {
                                                            'title': {
                                                                type: 'h1',
                                                                text: 'Discover what all the buzz is about!'
                                                            },
                                                            'subtitle': {
                                                                type: 'p',
                                                                text: 'Our app is available on any mobile device! Download now to get started!'
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            'features': {
                                                type: 'row',
                                                config: {
                                                    className: 'header',
                                                    type: "flex",
                                                    justify: "center",
                                                    key: 'ProbandoKey'
                                                },
                                                children: {
                                                    'col': {
                                                        type: "col",
                                                        config: {
                                                            className: 'masthead',
                                                            key: 'ProbandoKey',
                                                            xs: { span: 24 },
                                                            lg: { span: 24 }
                                                        },
                                                        children: {
                                                            'title': {
                                                                type: 'h1',
                                                                text: 'Unlimited Features, Unlimited Fun'
                                                            },
                                                            'subtitle': {
                                                                type: 'p',
                                                                text: 'Check out what you can do with this app theme!'
                                                            },
                                                            'featureContent': {
                                                                type: "row",
                                                                children: {
                                                                    'contentLeft': {
                                                                        type: "col",
                                                                        config: {
                                                                            className: 'pad',
                                                                            key: 'ProbandoKey',
                                                                            xs: { span: 24 },
                                                                            lg: { span: 8 }
                                                                        },
                                                                        children: {
                                                                            'inputName1': {
                                                                                type: 'p',
                                                                                text: 'img phone'
                                                                            }
                                                                        }
                                                                    },
                                                                    'contentRigth': {
                                                                        type: 'col',
                                                                        config: {
                                                                            xs: { span: 24 },
                                                                            lg: { span: 16 }
                                                                        },
                                                                        children: {
                                                                            'row-1': {
                                                                                type: "col",
                                                                                children: {
                                                                                    'col-1-1': {
                                                                                        type: 'col',
                                                                                        config: {
                                                                                            xs: { span: 24 },
                                                                                            lg: { span: 12 }
                                                                                        },
                                                                                        children: {
                                                                                            'title': {
                                                                                                type: 'h1',
                                                                                                text: 'Device Mockups'
                                                                                            },
                                                                                            'subtitle': {
                                                                                                type: 'p',
                                                                                                text: 'Ready to use HTML/CSS device mockups, no Photoshop required!'
                                                                                            }
                                                                                        }
                                                                                    },
                                                                                    'col-1-2': {
                                                                                        type: 'col',
                                                                                        config: {
                                                                                            xs: { span: 24 },
                                                                                            lg: { span: 12 }
                                                                                        },
                                                                                        children: {
                                                                                            'title': {
                                                                                                type: 'h1',
                                                                                                text: 'Flexible Use'
                                                                                            },
                                                                                            'subtitle': {
                                                                                                type: 'p',
                                                                                                text: 'Put an image, video, animation, or anything else in the screen!'
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            },
                                                                            'row-2': {
                                                                                type: "row",
                                                                                config: {
                                                                                    className: 'pad',
                                                                                    key: 'ProbandoKey',
                                                                                    xs: { span: 24 },
                                                                                    lg: { span: 8 }
                                                                                },
                                                                                children: {
                                                                                    'col-2-1': {
                                                                                        type: 'col',
                                                                                        config: {
                                                                                            xs: { span: 24 },
                                                                                            lg: { span: 12 }
                                                                                        },
                                                                                        children: {
                                                                                            'title': {
                                                                                                type: 'h1',
                                                                                                text: 'Free to Use'
                                                                                            },
                                                                                            'subtitle': {
                                                                                                type: 'p',
                                                                                                text: 'As always, this theme is free to download and use for any purpose!'
                                                                                            }
                                                                                        }
                                                                                    },
                                                                                    'col-2-2': {
                                                                                        type: 'col',
                                                                                        config: {
                                                                                            xs: { span: 24 },
                                                                                            lg: { span: 12 }
                                                                                        },
                                                                                        children: {
                                                                                            'title': {
                                                                                                type: 'h1',
                                                                                                text: 'Open Source'
                                                                                            },
                                                                                            'subtitle': {
                                                                                                type: 'p',
                                                                                                text: 'Since this theme is MIT licensed, you can use it commercially!'
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            'contact': {
                                                type: 'row',
                                                config: {
                                                    className: 'header',
                                                    type: "flex",
                                                    justify: "center",
                                                    key: 'ProbandoKey'
                                                },
                                                children: {
                                                    'leftContent': {
                                                        type: "col",
                                                        config: {
                                                            className: 'masthead',
                                                            key: 'ProbandoKey',
                                                            xs: { span: 24 },
                                                            lg: { span: 10 }
                                                        },
                                                        children: {
                                                            'title1': {
                                                                type: 'h1',
                                                                text: 'Stop waiting.'
                                                            },
                                                            'title2': {
                                                                type: 'h1',
                                                                text: 'Start building.'
                                                            }
                                                        }
                                                    },
                                                    'rigthContent': {
                                                        type: "col",
                                                        config: {
                                                            xs: { span: 24 },
                                                            lg: { span: 10 }
                                                        }
                                                    },
                                                    'socialContent': {
                                                        type: "col",
                                                        config: {
                                                            className: 'pad',
                                                            key: 'ProbandoKey',
                                                            lg: { span: 24 }
                                                        },
                                                        children: {
                                                            'inputName1': {
                                                                type: 'p',
                                                                text: 'We love new friends!'
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            } />
                    </Layout.Content>
                </Layout>
            </Layout>
        );
    }
};

export default WorkSpace