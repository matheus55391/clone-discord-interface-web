import { ChannelList, ChannelInfo, ServerList, ServerName, UserList, ChannelChat, UserInfo } from '../../components'
import { Grid } from './styles'
export const DiscordLayout = () =>{
    return (
        <Grid>
            <ServerList/>
            <ServerName/>
            <ChannelInfo/>
            <ChannelList/>
            <UserList/>
            <ChannelChat/>
            <UserInfo/>
        </Grid>
    )
}