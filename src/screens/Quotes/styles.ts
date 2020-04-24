import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: 24,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  leftContent: {
    flex: 0.3,
  },
  rightContent: {
    flex: 0.7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  symbol: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 0.3,
    alignItems: 'flex-end',
    marginRight: 6,
  },
  changeFieldContainer: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 15,
    fontWeight: '500',
  },
  icon: {
    marginLeft: 4,
  },
});
