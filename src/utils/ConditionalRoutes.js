export const managerRoute = JSON.parse(localStorage.getItem('user')) && 
  (JSON.parse(localStorage.getItem('user')).isManager || JSON.parse(localStorage.getItem('user')).isAdmin)

export const userRoute = JSON.parse(localStorage.getItem('user')) && 
  !JSON.parse(localStorage.getItem('user')).isManager &&
  !JSON.parse(localStorage.getItem('user')).isAdmin

export const adminRoute = JSON.parse(localStorage.getItem('user')) && 
  JSON.parse(localStorage.getItem('user')).isAdmin

export const guestRoute = !JSON.parse(localStorage.getItem('user'))