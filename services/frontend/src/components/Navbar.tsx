// @ts-nocheck
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth'
import MonitorIcon from '@mui/icons-material/Monitor'
import NotificationsIcon from '@mui/icons-material/Notifications'
import StarIcon from '@mui/icons-material/Star'
import { AppBar, Badge, Box, Button, Container, IconButton, Toolbar } from "@mui/material"
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import NavbarCss from '../styles/Navbar.module.scss'

type NavbarButtonProps = { name: string, page: string, icon: any, selected: boolean }
type NavbarMenuItem = { name: string, page: string, icon: any }

const navbarMenuItems: Array<NavbarMenuItem> = [{
    name: 'Calender', page: '/calendar',
    icon: <CalendarViewMonthIcon />
}, {
    name: 'Saved', page: '/saved',
    icon: <StarIcon />
}, {
    name: 'Monitor', page: '/monitor',
    icon: <MonitorIcon />
}]

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
    const router = useRouter()
    const [activePage, setActivePage] = useState('/calendar')

    useEffect(() => {
        setActivePage(router.asPath ?? '/error')
    }, [router.asPath])

    const NavbarButton = ({ name, page, icon, selected }: NavbarButtonProps) => (
        <Link href={page}>
            <Button
                variant={selected ? 'outlined' : 'contained'}
                startIcon={icon}>
                {name}
            </Button>
        </Link>
    )

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar id={NavbarCss.AppBar} color="primary" position="fixed">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {navbarMenuItems.map((item: NavbarMenuItem) => (
                            <NavbarButton key={item.page}
                                selected={activePage === item.page ? true : false}
                                {...item} />
                        ))}
                        <Box sx={{ flexGrow: 1 }} />
                        <Box>
                            <IconButton
                                size="large"
                                color="inherit">
                                <Badge badgeContent={5} color="error">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}

export default Navbar
