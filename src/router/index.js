import SJQDiscover from '@/pages/discover'
import SJQMine from '@/pages/mine'
import SJQFriend from '@/pages/friend'


const routes = [
    {
        path:"/",
        exact:true,
        component:SJQDiscover
    },
    {
        path:"/mine",
        component:SJQMine
    },
    {
        path:"/friend",
        component:SJQFriend
    },


];

export default routes;