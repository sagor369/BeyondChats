import moment from 'moment';
import React from 'react';
import { NavLink } from 'react-router-dom';

const SenderCard = ({item}:any) => {
    const {sender, id  , message  } = item
    const date = moment(sender?.updated_at).format("MMM D YY")
    const image =sender?.name?.slice(0,2)
    const mess = message.split('\n')
    
    return (
        <NavLink to={`/${id}`}>
        <div className=" flex items-center gap-2 p-4 hover:bg-slate-500 active:bg-red-300 rounded-xl bg-blue-50 bg-opacity-25">
          <div className="size-14 rounded-full bg-slate-400 flex items-center justify-center">
            <p className="text-2xl uppercase">{image}</p>
          </div>
          <div className="grow">
            <div className="flex justify-between items-center ">
              <h3 className="text-lg font-semibold">{sender?.name ? sender.name : "unknown"} </h3>
              <p className="text-xs">{date} </p>
            </div>
            <p className='text-ellipsis overflow-hidden h-6'>{mess[0]}</p>
          </div>
        </div>
        </NavLink>
    );
};

export default SenderCard;