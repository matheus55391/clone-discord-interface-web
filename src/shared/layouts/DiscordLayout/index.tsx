import { ChannelList, ChannelInfo, ServerList, ServerName, UserList, Chat, UserInfo } from '../../components'
import { Grid } from './styles'
export const DiscordLayout = () =>{
    return (
        <Grid>
            <ServerList/>
            <ServerName/>
            <ChannelInfo/>
            <ChannelList/>
            <UserList/>
            <Chat/>
            <UserInfo/>
        </Grid>
    )
}