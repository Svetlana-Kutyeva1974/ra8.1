import React from 'react';
import moment from 'moment';

export default function DateTimePretty(Component) {
  return class extends React.Component {
      render() {
      console.log('обертка на входе', this.props,'\n', this.props.date);
      const {date} = this.props;
      //let newdate = moment().startOf(date).fromNow();
      let newdate = moment(new Date(date)).fromNow();
      const d= new Date();
      const ds = d - new Date(date);
      let dsInHours = Number(ds/3600000);
      //dsInHours = 20;
     if (dsInHours< 1) {
         newdate =  moment().startOf('hours').fromNow();
      } else if(dsInHours>= 1 && dsInHours>=24){
        newdate = `${Math.round(Number(dsInHours/24))} дней назад`;
      } else if(dsInHours>= 1 && dsInHours<24){
        newdate = `${Math.round(Number(dsInHours))} часов назад`;
      }

      console.log('вычисл даты и разность', d, date,new Date(date), ds, 'число часов\n',dsInHours);
      console.log('обертка на выходе', newdate);
      return <Component date ={newdate} />;
      }
  }
}





//console.log('относит даты',moment().startOf(newdate).fromNow(), moment().startOf(newdate).fromNow());
