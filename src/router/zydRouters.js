import Vue from "vue";
import Router from "vue-router";
import Qwer from '@/components/userInfo/qwer'
import MyReminder from '@/components/healthPlan/myReminder';
import Message from '@/components/pages/me/message';
import MessageMain from '@/components/pages/me/messageMain';
import payInfo from '@/components/payInfo/payInfo';
import MyRemindDetail from '@/components/healthPlan/myRemindDetail.vue'
export default [{
        path: '/healthPlan/myReminder',
        component: MyReminder
    },
    {
        path: '/myReminder/myRemindDetail',
        component: MyRemindDetail
    },
    {
        path: '/message',
        component: Message
    },
    {
        path: '/messageMain',
        component: MessageMain
    },
    {
        path: '/payInfo',
        component: payInfo
    }
]
