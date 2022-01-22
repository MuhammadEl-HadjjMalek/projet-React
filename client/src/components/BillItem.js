import { View, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const BillItem = ({ bill }) => {
  return (
    <View style={tw`p-4 shadow-lg rounded-md my-1 bg-white`}>
      <View>
          <Text>{bill.paidBy ? bill.paidBy : "Not Yet Paid" }</Text>
          <Text>{bill.to}</Text>
          <Text>{bill.cost}</Text>
      </View>
      <View>
          <Text>{bill.consumption} kw/h</Text>
      </View>
    </View>
  );
};

export default BillItem;
