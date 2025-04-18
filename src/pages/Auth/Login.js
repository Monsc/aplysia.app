import { useMutation } from '@apollo/client'
import React, { useContext, useState, useEffect } from 'react'
import { FormButton, FormTitle, Input } from '../../components/GlobalStyles/FormStyles'
import { LOGIN_USER } from '../../graphql/mutations/authMutation'
import { GlobalContext } from '../../utils/Context'
import { AuthContainer, ButtonsContainer, FormContainer } from './ModuleStyles'
import { PageContainer } from '../../components/GlobalStyles/PageStyles'
import Loader from "../../components/Loaders/Loader.js"
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const Login = () => {
    const { setPage } = useContext(GlobalContext)

    useEffect(() => {
        setPage('Login')
    }, [setPage])

    const [login, { loading }] = useMutation(LOGIN_USER, {
        onCompleted: res => {
            const user = res.login
            localStorage.setItem('user', JSON.stringify(user))
            toast.success('登录成功！')
            setTimeout(() => {
                user.isManager ?
                    window.location.href = '/dashboard' :
                    window.location.href = '/'
            }, 1000)
        },
        onError: err => {
            toast.error(err.message, {
                autoClose: 5500,
                pauseOnHover: true
            })
        }
    })

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const handleLogin = async (e) => {
        e.preventDefault()
        await login({
            variables: {
                email: data.email,
                password: data.password
            }
        })
    }

    return (
        <PageContainer>
            <AuthContainer>
                {!loading ? (
                    <FormContainer>
                        <form className="form-box" onSubmit={handleLogin}>
                            <FormTitle style={{ marginBottom: '20px' }}>登录</FormTitle>
                            <Input
                                style={{ margin: '10px 0' }}
                                placeholder="邮箱"
                                type="email"
                                required
                                value={data.email}
                                onChange={(e) => setData({ ...data, email: e.target.value })}
                            />
                            <Input
                                style={{ margin: '10px 0' }}
                                placeholder="密码"
                                type="password"
                                required
                                value={data.password}
                                onChange={(e) => setData({ ...data, password: e.target.value })}
                            />
                            <ButtonsContainer>
                                <Link to="/register">
                                    <FormButton
                                        type="button"
                                        style={{ border: '2px solid #ff6e29', background: "#fff", color: "#ff6e29" }}
                                    >
                                        注册新账号
                                    </FormButton>
                                </Link>
                                <FormButton type="submit" disabled={loading}>
                                    {loading ? "处理中..." : "登录"}
                                </FormButton>
                            </ButtonsContainer>
                        </form>
                    </FormContainer>
                ) : <Loader />}
            </AuthContainer>
        </PageContainer>
    )
}

export default Login
