import React, { Component, useState, useEffect } from 'react';
import "./sidebar.css"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import db from './firebase'
import { useStatevalue } from './StateProvider';

const Sidebar = () => {
    const [channels, setchannels] = useState([])
    const [{user}] = useStatevalue()


    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshop => (
            setchannels(snapshop.docs.map(doc => ({
                id: doc.id,
                name: doc.data().name,

            })))
        ))
    }, [])
    return (
        <div className="sidebar" >
            <div className="sidebar__header" >
                <div className="sidebar__info" >
                    <h2>Batta Slack</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.displayName}
                    </h3>
                </div>
                <CreateIcon />
            </div>
            <SidebarOption Icon={InsertCommentIcon} title="Genaral" />
            <SidebarOption Icon={InboxIcon} title="TV" />
            <SidebarOption Icon={DraftsIcon} title="Emails" />
            <SidebarOption Icon={BookmarkBorderIcon} title="Books" />
            <SidebarOption Icon={PeopleAltIcon} title="Introduction" />
            <SidebarOption Icon={AppsIcon} title="Apps" />
            <SidebarOption Icon={FileCopyIcon} title="Revision" />
            <SidebarOption Icon={ExpandLessIcon} title="Show less" />
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
            <hr />
            <SidebarOption Icon={AddIcon} addchanneloption title="Add Channel" />
            {channels.map(channel => (
                <SidebarOption title={channel.name} id={channel.id} />
            ))}
        </div>
    );
}

export default Sidebar;