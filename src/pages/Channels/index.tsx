import { ChannelList, ChannelInfo, ServerList, ServerName, UserList, ChannelChat, UserInfo } from '../../shared/components'
import { Grid } from './styles'
export const Channels = () =>{
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