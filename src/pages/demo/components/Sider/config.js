import { generateOptionByEnums } from './util';
export const clueStatusEnums = {
  1: '已留资',
  2: '未留资',
};
export const clueStatusOptions = generateOptionByEnums(clueStatusEnums);

export const replyStatusEnums = {
  1: '已回复',
  2: '未回复',
};
export const replyStatusOptions = generateOptionByEnums(replyStatusEnums);

export const intentionLvEnums = {
  1: '高意向',
  2: '低意向',
};
export const intentionLvOptions = generateOptionByEnums(intentionLvEnums);

export const readStatusEnums = {
  1: '已读',
  2: '未读',
};

export const readStatusOptions = generateOptionByEnums(readStatusEnums);

const mockIntentions = {
  1: '买车',
  2: '卖车',
  3: '置换',
  4: '售后',
};
export const mockIntentionOptions = generateOptionByEnums(mockIntentions);
