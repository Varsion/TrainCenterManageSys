// 图一
$(document).ready(function() {
    $.get('http://blog.coderth.cn/api/superadmin/getformopennum', function(data) {
        console.log(data)
        console.log(data.data.no);
        if (data.code === 200) {
            var mychart = echarts.init(document.getElementById('excel_ch'));
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    right: 0,
                    top: "35%",
                    right: "5%",
                    textStyle: {
                        fontSize: 16,
                    }
                    // data: ['直接访问', '搜索引擎']
                },
                color: ["#D4D5E1", "#5A8BFF"],
                title: {
                    left: "center",
                    top: "30%",
                    textStyle: {
                        color: "#27D9C8",
                        fontSize: 20,
                        align: "center"
                    }
                },
                series: [{
                    name: '实验室借用申请表',
                    type: 'pie',
                    radius: ['50%', '75%'],
                    center: ['30%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'

                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '16',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 200, name: '待处理表单' },
                        { value: 100, name: '新增表单' }
                    ]
                }]
            };
            var twChart = echarts.init(document.getElementById('excel_ch'));
            twChart.setOption(option);
            setTimeout(function() {
                window.onresize = function() {
                    twChart.resize();
                }
            }, 200)

            // 初始化中等图标 图标

            var mychart1 = echarts.init(document.getElementById('excel_ch1'));
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    right: 0,
                    top: "35%",
                    right: "5%",
                    textStyle: {
                        fontSize: 16,
                    }
                    // data: ['直接访问', '搜索引擎']
                },
                color: ["#D4D5E1", "#5A8BFF"],
                title: {
                    left: "center",
                    top: "30%",
                    textStyle: {
                        color: "#27D9C8",
                        fontSize: 20,
                        align: "center"
                    }
                },
                series: [{
                    name: '实验室借用申请表',
                    type: 'pie',
                    radius: ['50%', '75%'],
                    center: ['30%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'

                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '16',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 200, name: '待处理表单' },
                        { value: 100, name: '新增表单' }
                    ]
                }]
            };

            var twChart1 = echarts.init(document.getElementById('excel_ch1'));
            twChart1.setOption(option);
            setTimeout(function() {
                    window.onresize = function() {
                        twChart1.resize();
                    }
                })
                // 初始化小图标 
            var mychart2 = echarts.init(document.getElementById('excel_ch2'));
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    right: 0,
                    top: "35%",
                    right: "5%",
                    textStyle: {
                        fontSize: 16,
                    }
                    // data: ['直接访问', '搜索引擎']
                },
                color: ["#D4D5E1", "#5A8BFF"],
                title: {
                    left: "center",
                    top: "30%",
                    textStyle: {
                        color: "#27D9C8",
                        fontSize: 20,
                        align: "center"
                    }
                },
                series: [{
                    name: '实验室借用申请表',
                    type: 'pie',
                    radius: ['50%', '75%'],
                    center: ['30%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'

                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '16',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 200, name: '待处理表单' },
                        { value: 100, name: '新增表单' }
                    ]
                }]
            };



            var twChart2 = echarts.init(document.getElementById('excel_ch2'));
            twChart2.setOption(option);
            setTimeout(function() {
                window.onresize = function() {
                    twChart.resize();
                }
            })

        }
    });
})



// 图二
$(document).ready(function() {
    $.get('http://blog.coderth.cn/api/superadmin/getforminstrumentnum', function(data) {
        console.log(data);
        if (data.code === 200) {
            // 初始化小图标 图标
            var mychart3 = echarts.init(document.getElementById('excel_ch3'));
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    right: 0,
                    top: "35%",
                    right: "5%",
                    textStyle: {
                        fontSize: 16,
                    }
                    // data: ['直接访问', '搜索引擎']
                },
                color: ["#D4D5E1", "#5A8BFF"],
                title: {
                    left: "center",
                    top: "30%",
                    textStyle: {
                        color: "#27D9C8",
                        fontSize: 20,
                        align: "center"
                    }
                },
                series: [{
                    name: '开放实验室使用申请表',
                    type: 'pie',
                    radius: ['50%', '75%'],
                    center: ['30%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'

                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '16',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 200, name: '待处理表单' },
                        { value: 100, name: '新增表单' }
                    ]
                }]
            };
            var twChart3 = echarts.init(document.getElementById('excel_ch3'));
            twChart3.setOption(option);
            setTimeout(function() {
                window.onresize = function() {
                    twChart3.resize();
                }
            }, 300)

            // 初始化中等图标 图标

            var mychart4 = echarts.init(document.getElementById('excel_ch4'));
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    right: 0,
                    top: "35%",
                    right: "5%",
                    textStyle: {
                        fontSize: 16,
                    }
                    // data: ['直接访问', '搜索引擎']
                },
                color: ["#D4D5E1", "#5A8BFF"],
                title: {
                    left: "center",
                    top: "30%",
                    textStyle: {
                        color: "#27D9C8",
                        fontSize: 20,
                        align: "center"
                    }
                },
                series: [{
                    name: '开放实验室使用申请表',
                    type: 'pie',
                    radius: ['50%', '75%'],
                    center: ['30%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'

                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '16',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 200, name: '待处理表单' },
                        { value: 100, name: '新增表单' }
                    ]
                }]
            };

            var twChart4 = echarts.init(document.getElementById('excel_ch4'));
            twChart4.setOption(option);
            setTimeout(function() {
                window.onresize = function() {
                    twChart4.resize();
                }
            })


            // 初始化大图标 
            var mychart5 = echarts.init(document.getElementById('excel_ch5'));
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    right: 0,
                    top: "35%",
                    right: "5%",
                    textStyle: {
                        fontSize: 16,
                    }
                    // data: ['直接访问', '搜索引擎']
                },
                color: ["#D4D5E1", "#5A8BFF"],
                title: {
                    left: "center",
                    top: "30%",
                    textStyle: {
                        color: "#27D9C8",
                        fontSize: 20,
                        align: "center"
                    }
                },
                series: [{
                    name: '开放实验室使用申请表',
                    type: 'pie',
                    radius: ['50%', '75%'],
                    center: ['30%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'

                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '16',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 200, name: '待处理表单' },
                        { value: 100, name: '新增表单' }
                    ]
                }]
            };

            var twChart5 = echarts.init(document.getElementById('excel_ch5'));
            twChart5.setOption(option);
            setTimeout(function() {
                window.onresize = function() {
                    twChart5.resize();
                }
            })
        }
    });
})


// 图三

$(document).ready(function() {
        $.get('http://blog.coderth.cn/api/superadmin/getforminstrumentnum', function(data) {
            console.log(data);
            if (data.code === 200) {
                // 初始化小图标 图标
                var mychart8 = echarts.init(document.getElementById('excel_ch8'));
                var option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        right: 0,
                        top: "35%",
                        right: "5%",
                        textStyle: {
                            fontSize: 16,
                        }
                        // data: ['直接访问', '搜索引擎']
                    },
                    color: ["#D4D5E1", "#5A8BFF"],
                    title: {
                        left: "center",
                        top: "30%",
                        textStyle: {
                            color: "#27D9C8",
                            fontSize: 20,
                            align: "center"
                        }
                    },
                    series: [{
                        name: '实验室仪器借用申请表',
                        type: 'pie',
                        radius: ['50%', '75%'],
                        center: ['30%', '50%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'

                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '16',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: 200, name: '待处理表单' },
                            { value: 100, name: '新增表单' }
                        ]
                    }]
                };
                var twChart8 = echarts.init(document.getElementById('excel_ch8'));
                twChart8.setOption(option);
                setTimeout(function() {
                    window.onresize = function() {
                        twChart8.resize();
                    }
                }, 300)

                // 初始化中等图标 图标

                var mychart7 = echarts.init(document.getElementById('excel_ch7'));
                var option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        right: 0,
                        top: "35%",
                        right: "5%",
                        textStyle: {
                            fontSize: 16,
                        }
                        // data: ['直接访问', '搜索引擎']
                    },
                    color: ["#D4D5E1", "#5A8BFF"],
                    title: {
                        left: "center",
                        top: "30%",
                        textStyle: {
                            color: "#27D9C8",
                            fontSize: 20,
                            align: "center"
                        }
                    },
                    series: [{
                        name: '实验室仪器借用申请表',
                        type: 'pie',
                        radius: ['50%', '75%'],
                        center: ['30%', '50%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'

                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '16',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: 200, name: '待处理表单' },
                            { value: 100, name: '新增表单' }
                        ]
                    }]
                };

                var twChart7 = echarts.init(document.getElementById('excel_ch7'));
                twChart7.setOption(option);
                setTimeout(function() {
                    window.onresize = function() {
                        twChart7.resize();
                    }
                })


                // 初始化大图标 
                var mychart6 = echarts.init(document.getElementById('excel_ch6'));
                var option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        right: 0,
                        top: "35%",
                        right: "5%",
                        textStyle: {
                            fontSize: 16,
                        }
                        // data: ['直接访问', '搜索引擎']
                    },
                    color: ["#D4D5E1", "#5A8BFF"],
                    title: {
                        left: "center",
                        top: "30%",
                        textStyle: {
                            color: "#27D9C8",
                            fontSize: 20,
                            align: "center"
                        }
                    },
                    series: [{
                        name: '实验室仪器借用申请表',
                        type: 'pie',
                        radius: ['50%', '75%'],
                        center: ['30%', '50%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'

                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '16',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: 200, name: '待处理表单' },
                            { value: 100, name: '新增表单' }
                        ]
                    }]
                };

                var twChart6 = echarts.init(document.getElementById('excel_ch6'));
                twChart6.setOption(option);
                setTimeout(function() {
                    window.onresize = function() {
                        twChart6.resize();
                    }
                })
            }
        });
    })
    // 图四
$(document).ready(function() {
    $.get('http://blog.coderth.cn/api/superadmin/getforminstrumentnum', function(data) {
        console.log(data);
        if (data.code === 200) {

            // 初始化小图标 图标
            var mychart11 = echarts.init(document.getElementById('excel_ch11'));
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    right: 0,
                    top: "35%",
                    right: "5%",
                    textStyle: {
                        fontSize: 16,
                    }
                    // data: ['直接访问', '搜索引擎']
                },
                color: ["#D4D5E1", "#5A8BFF"],
                title: {
                    left: "center",
                    top: "30%",
                    textStyle: {
                        color: "#27D9C8",
                        fontSize: 20,
                        align: "center"
                    }
                },
                series: [{
                    name: '期末实验室教学检查记录表',
                    type: 'pie',
                    radius: ['50%', '75%'],
                    center: ['30%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'

                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '16',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 200, name: '待处理表单' },
                        { value: 100, name: '新增表单' }
                    ]
                }]
            };
            var twChart11 = echarts.init(document.getElementById('excel_ch11'));
            twChart11.setOption(option);
            setTimeout(function() {
                window.onresize = function() {
                    twChart11.resize();
                }
            }, 300)

            // 初始化中等图标 图标

            var mychart10 = echarts.init(document.getElementById('excel_ch10'));
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    right: 0,
                    top: "35%",
                    right: "5%",
                    textStyle: {
                        fontSize: 16,
                    }
                    // data: ['直接访问', '搜索引擎']
                },
                color: ["#D4D5E1", "#5A8BFF"],
                title: {
                    left: "center",
                    top: "30%",
                    textStyle: {
                        color: "#27D9C8",
                        fontSize: 20,
                        align: "center"
                    }
                },
                series: [{
                    name: '期末实验室教学检查记录表',
                    type: 'pie',
                    radius: ['50%', '75%'],
                    center: ['30%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'

                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '16',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 200, name: '待处理表单' },
                        { value: 100, name: '新增表单' }
                    ]
                }]
            };

            var twChart10 = echarts.init(document.getElementById('excel_ch10'));
            twChart10.setOption(option);
            setTimeout(function() {
                window.onresize = function() {
                    twChart10.resize();
                }
            })


            // 初始化大图标 
            var mychart9 = echarts.init(document.getElementById('excel_ch9'));
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    right: 0,
                    top: "35%",
                    right: "5%",
                    textStyle: {
                        fontSize: 16,
                    }
                    // data: ['直接访问', '搜索引擎']
                },
                color: ["#D4D5E1", "#5A8BFF"],
                title: {
                    left: "center",
                    top: "30%",
                    textStyle: {
                        color: "#27D9C8",
                        fontSize: 20,
                        align: "center"
                    }
                },
                series: [{
                    name: '期末实验室教学检查记录表',
                    type: 'pie',
                    radius: ['50%', '75%'],
                    center: ['30%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'

                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '16',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 200, name: '待处理表单' },
                        { value: 100, name: '新增表单' }
                    ]
                }]
            };
            var twChart9 = echarts.init(document.getElementById('excel_ch9'));
            twChart9.setOption(option);
            setTimeout(function() {
                window.onresize = function() {
                    twChart9.resize();
                }
            })

        }
    });
})

// 图5

$(document).ready(function() {
    $.get('http://blog.coderth.cn/api/superadmin/getforminstrumentnum', function(data) {
        console.log(data);
        if (data.code === 200) {

            // 初始化小图标 图标
            var mychart11 = echarts.init(document.getElementById('excel_ch14'));
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    right: 0,
                    top: "35%",
                    right: "5%",
                    textStyle: {
                        fontSize: 16,
                    }
                    // data: ['直接访问', '搜索引擎']
                },
                color: ["#D4D5E1", "#5A8BFF"],
                title: {
                    left: "center",
                    top: "30%",
                    textStyle: {
                        color: "#27D9C8",
                        fontSize: 20,
                        align: "center"
                    }
                },
                series: [{
                    name: '实验室运行记录表',
                    type: 'pie',
                    radius: ['50%', '75%'],
                    center: ['30%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'

                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '16',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 200, name: '待处理表单' },
                        { value: 100, name: '新增表单' }
                    ]
                }]
            };
            var twChart11 = echarts.init(document.getElementById('excel_ch14'));
            twChart11.setOption(option);
            setTimeout(function() {
                window.onresize = function() {
                    twChart11.resize();
                }
            }, 300)

            // 初始化中等图标 图标

            var mychart10 = echarts.init(document.getElementById('excel_ch13'));
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    right: 0,
                    top: "35%",
                    right: "5%",
                    textStyle: {
                        fontSize: 16,
                    }
                    // data: ['直接访问', '搜索引擎']
                },
                color: ["#D4D5E1", "#5A8BFF"],
                title: {
                    left: "center",
                    top: "30%",
                    textStyle: {
                        color: "#27D9C8",
                        fontSize: 20,
                        align: "center"
                    }
                },
                series: [{
                    name: '实验室运行记录表',
                    type: 'pie',
                    radius: ['50%', '75%'],
                    center: ['30%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'

                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '16',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 200, name: '待处理表单' },
                        { value: 100, name: '新增表单' }
                    ]
                }]
            };

            var twChart10 = echarts.init(document.getElementById('excel_ch13'));
            twChart10.setOption(option);
            setTimeout(function() {
                window.onresize = function() {
                    twChart10.resize();
                }
            })


            // 初始化大图标 
            var mychart9 = echarts.init(document.getElementById('excel_ch12'));
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    right: 0,
                    top: "35%",
                    right: "5%",
                    textStyle: {
                        fontSize: 16,
                    }
                    // data: ['直接访问', '搜索引擎']
                },
                color: ["#D4D5E1", "#5A8BFF"],
                title: {
                    left: "center",
                    top: "30%",
                    textStyle: {
                        color: "#27D9C8",
                        fontSize: 20,
                        align: "center"
                    }
                },
                series: [{
                    name: '实验室运行记录表',
                    type: 'pie',
                    radius: ['50%', '75%'],
                    center: ['30%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'

                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '16',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 200, name: '待处理表单' },
                        { value: 100, name: '新增表单' }
                    ]
                }]
            };
            var twChart9 = echarts.init(document.getElementById('excel_ch12'));
            twChart9.setOption(option);
            setTimeout(function() {
                window.onresize = function() {
                    twChart9.resize();
                }
            })

        }
    });
})