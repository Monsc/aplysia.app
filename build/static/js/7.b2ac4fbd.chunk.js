(this["webpackJsonpaplysia-app-client"]=this["webpackJsonpaplysia-app-client"]||[]).push([[7],{323:function(e,t,a){"use strict";a.d(t,"d",(function(){return p})),a.d(t,"e",(function(){return b})),a.d(t,"c",(function(){return u})),a.d(t,"f",(function(){return j})),a.d(t,"a",(function(){return x})),a.d(t,"b",(function(){return f}));var o=a(347),n=a(371),s=a.n(n),i=a(44),r=a(372),c=a(373);const d=Object(r.a)({apiKey:"AIzaSyA3VHRbj4knFBXK3YVFdsr7xn2MvE1A0_E",authDomain:"hotel-booking-app-2c070.firebaseapp.com",projectId:"hotel-booking-app-2c070",storageBucket:"hotel-booking-app-2c070.appspot.com",messagingSenderId:"308536271440",appId:"1:308536271440:web:cf389c892a5fa653486755"}),l=Object(c.a)(d);var m=a(811);const p=e=>s()(e).format("DD/MM/YYYY"),b=e=>s()(e).format("Do MMMM, YYYY"),u=e=>{let t=s()(),a=s()(e).format("YYYY");return t.diff(a,"years")},j=async(e,t)=>{if(!e)return void alert("No file found.");const a=Object(o.d)(l,t),n=Object(o.e)(a,e);let s;return n.on("state_changed",(e=>{}),(e=>{i.b.error(e,{autoClose:5500,pauseOnHover:!0})}),(()=>{s=Object(o.b)(n.snapshot.ref)})),await Promise.resolve(n).then((async e=>await Promise.resolve(s).then((e=>e))))},x=async(e,t)=>{if(!e||0===e.length)return void alert("No file found.");const a=[];return await Promise.all(e.map((async(e,o)=>{const n=Object(m.a)();let s=`images/rooms/${t.id}/roomImage-${n}`,i=await j(e,s);a.push({url:i,uuid:n})}))),a},f=async(e,t)=>{await Promise.all(e.map((async(e,a)=>{const n=e.uuid,s=Object(o.d)(l,`images/rooms/${t}/roomImage-${n}`);await Object(o.a)(s)})))}},327:function(e,t,a){"use strict";a.d(t,"e",(function(){return n})),a.d(t,"d",(function(){return s})),a.d(t,"f",(function(){return i})),a.d(t,"g",(function(){return r})),a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return l}));var o=a(10);const n=o.a.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000000d1;
    z-index: 9999999
`,s=o.a.div`;
    width: 700px;
    max-height: 80vh;
    overflow-y: scroll;
    background: #fff;
    padding: 20px;
    border-radius: 6px;
    position: relative;
    .close-icon{
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer
    }
    @media(max-width: 700px){
        width: calc(100vw - 40px);
    }
`,i=o.a.h3`
    font-weight: 26px;
    font-weight: 600;
    margin-bottom: 20px
`,r=o.a.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
    justify-content: center;
    row-gap: 16px;
    column-gap: 16px;
    div{
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid red;
        cursor: pointer;
        border-radius: 4px;
    }
    .assigned{
        background: #ffadad
    }
    .selected{
        background: #8dffd0;
        border-color: green
    }
`,c=o.a.div`
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 16px;
`,d=o.a.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 4px;
    background: #ffcdb8;
    height: 160px;
    .plus-icon{
        color: #9a9a9a !important;
        font-size: 40px !important;
    }
`,l=o.a.div`
    display: flex;
    justify-content: space-between
`},339:function(e,t,a){},342:function(e,t,a){"use strict";var o=a(83);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a(119)),s=a(1);t.default=(0,n.default)((0,s.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},349:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return s}));var o=a(47);const n=o.a`
query($id: ID!){
    getUserBookings(id: $id){
        id
        from
        to
        days
        paid
        amount
        bookedOn
        people{
            children
            adults
        }
        roomNumbers
        numOfPeople
        location
        bookedBy{
            name
            email
            username
            id
        }
        hotel{
            id
            name
            location
        }
        room{
            id
            name
            price
            others
        }
    }
}
`,s=o.a`
query($id: ID!){
    getHotelBookings(id: $id){
        id
        from
        to
        days
        paid
        amount
        bookedOn
        people{
            children
            adults
        }
        roomNumbers
        numOfPeople
        location
        bookedBy{
            name
            email
            username
            id
        }
        hotel{
            id
            name
            location
        }
        room{
            id
            name
            price
            others
        }
    }
}
`;o.a`
    query($id: ID!){
        getBooking(id: id){
            id
        from
        to
        days
        paid
        amount
        bookedOn
        people{
            children
            adults
        }
        roomNumbers
        numOfPeople
        location
        bookedBy{
            name
            email
            username
            id
        }
        hotel{
            id
            name
            location
        }
        room{
            id
            name
            price
            others
        }
        }
    }
`},358:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"d",(function(){return s})),a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return r}));var o=a(10);const n=o.a.div`
  height: 58px;
  border: 1px solid #d2d2d2;
  padding: 8px 10px;
  display: grid;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  margin-bottom: 10px;

  &.normal-col{
    @media(max-width: 700px) {
      display: none;
    }
  }

  &.responsive-col{
    display: none;
    grid-template-columns: 0.5fr 1fr !important;

    @media(max-width: 700px) {
      display: grid;
    }
  }

  
`,s=o.a.p`
  margin: 0 !important;
  text-align: center;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  :first-child{
    text-align: left;
  }
  p{
    width: fit-content;
    margin: 0
  }
`,i=o.a.button`
  width: 40px;
  height: 40px;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d2d2d2;
  border-radius: 4px !important;
  outline: 0;
  margin: 0 6px !important;
  background: transparent;
  cursor: pointer
`,r=o.a.div`
  display: flex;
  align-items: center;
  justify-content: center;
`},359:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return s}));var o=a(47);const n=o.a`
mutation($from: Date!, $to: Date!, $roomNumbers: [Int]!, $paid: Boolean!, $amount: Int!,
    $bookedBy: ID!, $people: people!, $room: ID!, $hotel: ID!){
    addBooking(from: $from, to: $to, roomNumbers: $roomNumbers, paid: $paid, amount: $amount, 
        bookedBy: $bookedBy, people: $people, room: $room, hotel: $hotel){
      id
      from
      to
      bookedBy{
          name
      }
    }
  }
`,s=o.a`
mutation($id: ID!){
    cancelBooking(id: $id){
      id
      from
      to
      bookedBy{
          name
      }
    }
  }
`},370:function(e,t,a){"use strict";a(0),a(398);var o=a(20),n=a(1);t.a=e=>Object(n.jsx)("div",{className:"search-bar",children:Object(n.jsx)(o.c,{placeholder:e.placeholder,value:e.query,onChange:t=>e.setQuery(t.target.value)})})},398:function(e,t,a){},400:function(e,t,a){"use strict";var o=a(83);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a(119)),s=a(1);t.default=(0,n.default)((0,s.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"}),"MoreHoriz")},401:function(e,t,a){"use strict";var o=a(83);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a(119)),s=a(1);t.default=(0,n.default)([(0,s.jsx)("path",{d:"M15 2h-3.5l-1-1h-5l-1 1H1v2h14zm1 7c-.7 0-1.37.1-2 .29V5H2v12c0 1.1.9 2 2 2h5.68c1.12 2.36 3.53 4 6.32 4 3.87 0 7-3.13 7-7s-3.13-7-7-7m0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5"},"0"),(0,s.jsx)("path",{d:"M16.5 12H15v5l3.6 2.1.8-1.2-2.9-1.7z"},"1")],"AutoDelete")},564:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a(11),s=a(10),i=a(370),r=a(97),c=a(317),d=a(44),l=a(358),m=a(359),p=a(349),b=a(323),u=a(401),j=a.n(u),x=a(400),f=a.n(x),h=a(1);const g=s.a.div`
    background: white;
    box-shadow: 2px 3px 7px 0px #66666682;
    padding: 14px;
    border-radius: 6px;
    max-width: 100%;

    .details {
        margin-top: 16px;
        
        p {
            text-align: start;
            font-size: 14px;
            color: grey
        }
    }

    .payment-status {
        padding: 6px;
        border-radius: 4px;
        background: #f16d59;
        text-align: start;
        font-size: 14px;
        width: fit-content;
        margin-top: 6px !important;
        color: #fff;

        &.paid{
            background: #5fffc5;
            color: #008d5a
        }
    }
    
    
`;var O=e=>{const{hotel:t,room:a,from:o,to:n,bookedOn:s,amount:i,paid:r}=e.data,[u]=Object(c.a)(m.b);return Object(h.jsxs)(g,{children:[Object(h.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[Object(h.jsxs)("div",{children:[Object(h.jsxs)(l.d,{style:{fontSize:"20px",fontWeight:"bold"},children:[t.location,", ",t.name]}),Object(h.jsx)(l.d,{className:"payment-status "+(r?"paid":""),children:r?"Paid":"Not Paid"})]}),Object(h.jsxs)(l.a,{style:{justifyContent:"flex-end"},children:[Object(h.jsx)(l.b,{style:{background:"#ff6e29"},onClick:()=>e.setModal({state:!0,param:e.data,title:"Booking Details"}),children:Object(h.jsx)(f.a,{style:{color:"#fff"}})}),!e.isOld&&Object(h.jsx)(l.b,{style:{background:"#ff6e29"},onClick:()=>{e.setLoading(!0),u({variables:{id:e.data.id},refetchQueries:[p.b,{variables:{id:e.data.bookedBy.id}}]}).then((t=>{e.setLoading(!1),d.b.success("Canceled booking.",{autoClose:5500,pauseOnHover:!0})})).catch((t=>{e.setLoading(!1),d.b.error(t.message,{autoClose:5500,pauseOnHover:!0})}))},children:Object(h.jsx)(j.a,{style:{color:"#fff"}})})]})]}),Object(h.jsxs)("div",{className:"details",children:[Object(h.jsx)(l.d,{children:a.name}),Object(h.jsxs)(l.d,{children:["From ",Object(b.d)(o)," - To ",Object(b.d)(n)]}),Object(h.jsxs)(l.d,{children:["Booked On: ",Object(b.d)(s)]}),Object(h.jsxs)(l.d,{children:["Amount: Rs. ",i]})]})]})},y=a(327);const v=s.a.div`
    margin-top: 20px;

    .grid-container {
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));

        @media(max-width: 375px){
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        }
    }

`;var k=e=>{const[t,a]=Object(o.useState)(""),[s,c]=Object(o.useState)(!1),d=(new Date).setHours(0,0,0,0);let l=e.bookings?e.bookings.filter((e=>new Date(e.from)>d)):[],m=e.bookings?e.bookings.filter((e=>new Date(e.from)<=d)):[];return l=l.filter((e=>e.hotel.name.toLowerCase().includes(t.toString().toLowerCase()))),m=m.filter((e=>e.hotel.name.toLowerCase().includes(t.toString().toLowerCase()))),Object(h.jsxs)(v,{children:[Object(h.jsx)(i.a,{query:t,setQuery:a,placeholder:"Search bookings by hotel names..."}),Object(h.jsx)(n.g,{style:{fontSize:"20px",margin:"26px 0"},children:"Upcoming Bookings"}),Object(h.jsx)(y.c,{className:"grid-container",children:s?Object(h.jsx)(r.a,{}):l.map((t=>Object(h.jsx)(O,{data:t,setLoading:c,loading:s,setModal:e.setModal},t.id)))}),0===l.length&&Object(h.jsx)(n.g,{className:"small",style:{textAlign:"center",marginTop:"20px"},children:"No Bookings"}),Object(h.jsx)("br",{}),Object(h.jsx)(n.g,{style:{fontSize:"20px",margin:"26px 0"},children:"Old Bookings"}),Object(h.jsx)(y.c,{className:"grid-container",children:s?Object(h.jsx)(r.a,{}):m.map((t=>Object(h.jsx)(O,{data:t,setLoading:c,loading:s,setModal:e.setModal,isOld:!0},t.id)))}),0===m.length&&Object(h.jsx)(n.g,{className:"small",style:{textAlign:"center",marginTop:"20px"},children:"No Bookings"})]})},w=a(29),N=a(314),B=a(59),$=a(120),M=a(20),D=(a(144),a(342)),P=a.n(D),C=(a(339),a(145)),I=a(61),S=a(8);var Y=e=>{const t=e.booking,a=Object(S.q)();return Object(h.jsx)(y.e,{children:Object(h.jsxs)(y.d,{className:"modal-box",children:[Object(h.jsx)(P.a,{className:"close-icon",onClick:()=>e.setModal({state:!1,param:null,title:""})}),Object(h.jsx)(y.f,{children:e.title}),Object(h.jsx)("br",{}),Object(h.jsxs)(n.g,{className:"small",children:["Booked By: ",Object(h.jsx)("span",{children:t.bookedBy.name})]}),Object(h.jsxs)(n.g,{className:"small",children:["Username: ",Object(h.jsx)("span",{children:t.bookedBy.username})]}),Object(h.jsx)(C.a,{interactive:!0,content:Object(b.e)(t.bookedOn),placement:"bottom",children:Object(h.jsxs)(n.g,{className:"small",children:["Booked On: ",Object(h.jsx)("span",{children:Object(b.d)(t.bookedOn)})]})}),Object(h.jsx)("hr",{}),Object(h.jsx)("br",{}),Object(h.jsxs)(y.b,{children:[Object(h.jsxs)("div",{style:{flexBasis:"46%"},children:[Object(h.jsxs)(n.g,{className:"small",children:["Hotel: ",Object(h.jsx)("span",{children:t.hotel.name})]}),Object(h.jsxs)(n.g,{className:"small",children:["Location: ",Object(h.jsx)("span",{children:t.location})]}),Object(h.jsxs)(n.g,{className:"small",children:["Room: ",Object(h.jsx)("span",{children:t.room.name})]}),Object(h.jsx)(C.a,{interactive:!0,content:Object(b.e)(t.from),placement:"bottom",children:Object(h.jsxs)(n.g,{className:"small",children:["From: ",Object(h.jsx)("span",{children:Object(b.d)(t.from)})]})}),Object(h.jsx)(C.a,{interactive:!0,content:Object(b.e)(t.to),placement:"bottom",children:Object(h.jsxs)(n.g,{className:"small",children:["To: ",Object(h.jsx)("span",{children:Object(b.d)(t.to)})]})}),Object(h.jsxs)(n.g,{className:"small",children:["Duration:",Object(h.jsxs)("span",{children:[" ",t.days," ",1===t.days?"Day":"Days"]})]})]}),Object(h.jsxs)("div",{style:{flexBasis:"46%"},children:[Object(h.jsxs)(n.g,{className:"small",children:["Rooms:",t.roomNumbers.map((e=>Object(h.jsx)("span",{className:"highlight",style:{margin:"4px 2px"},children:e})))]}),Object(h.jsxs)(n.g,{className:"small",children:["Number of persons: ",Object(h.jsx)("span",{children:t.numOfPeople})]}),Object(h.jsxs)(n.g,{className:"small",children:["Adults: ",Object(h.jsx)("span",{children:t.people.adults})]}),Object(h.jsxs)(n.g,{className:"small",children:["Children: ",Object(h.jsx)("span",{children:t.people.children})]})]})]}),Object(h.jsx)("br",{}),Object(h.jsx)("hr",{}),Object(h.jsx)("br",{}),Object(h.jsxs)(n.g,{className:"small",children:["Room Price: ",Object(h.jsxs)("span",{children:["Rs. ",t.room.price]})]}),Object(h.jsxs)(n.g,{className:"small",children:["Amount ",t.paid?"Paid":"To Be Paid",": ",Object(h.jsxs)("span",{children:["Rs. ",t.amount]})]}),Object(h.jsxs)(n.g,{className:"small",children:["Payment Status:",Object(h.jsxs)("span",{children:[" ",t.paid?"Paid":"Not Paid"]})]}),Object(h.jsxs)(I.b,{children:[Object(h.jsx)(M.a,{children:"View Hotel & Room"}),t.paid?null:Object(h.jsx)(M.a,{onClick:()=>{a(`/payment/${t.hotel.id}/${t.room.id}/1`,{state:t})},children:"Pay Now"})]})]})})};t.default=e=>{const{style:t,bookingsData:a}=e,{setPage:s}=Object(o.useContext)(w.a);Object(o.useEffect)((()=>{s("Bookings")}),[]);const[i,r]=Object(o.useState)({state:!1,title:"",param:null,action:""}),c=JSON.parse(localStorage.getItem("user")),{data:d,loading:l,error:m}=Object(N.a)(p.b,{variables:{id:c.id}});if(l)return Object(h.jsx)(B.a,{});if(m)return Object(h.jsx)($.a,{error:m});const b=a||d.getUserBookings;return Object(h.jsxs)(n.c,{style:t,children:[i.state?Object(h.jsx)(Y,{booking:i.param,setModal:r,title:i.title}):null,Object(h.jsx)(k,{bookings:b,setModal:r,modal:i})]})}}}]);