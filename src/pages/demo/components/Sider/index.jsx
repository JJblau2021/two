/**
 * Sider
 * @returns
 */
import styles from './index.module.css';
import { Select, Form } from 'antd';
import { useState, useEffect } from 'react';
import TagGroup from './components/TagGroup';
import {
  intentionLvOptions,
  readStatusOptions,
  replyStatusOptions,
  clueStatusOptions,
  mockIntentionOptions,
} from './config';

const Sider = () => {
  const [intentions, setIntentions] = useState([]);
  useEffect(() => {
    queryIntentions();
  }, []);
  const queryIntentions = () => {
    setIntentions(mockIntentionOptions);
  };

  return (
    <div className={styles.sider__wrap}>
      <div className={styles.sider__hd}>
        <h5>对话筛选</h5>
      </div>
      <div className={styles.sider__bd}>
        <Form className={styles.sider__form} layout="vertical">
          <Form.Item
            className={styles.sider__box}
            name="intentionName"
            label="客户意图"
          >
            <TagGroup options={intentions} />
          </Form.Item>
          <Form.Item
            className={styles.sider__box}
            name="clueStatus"
            label="留资状态"
          >
            <Select options={clueStatusOptions} allowClear placeholder="全部" />
          </Form.Item>
          <Form.Item
            className={styles.sider__box}
            name="replyStatus"
            label="回复状态"
          >
            <Select
              options={replyStatusOptions}
              allowClear
              placeholder="全部"
            />
          </Form.Item>
          <Form.Item
            className={styles.sider__box}
            name="intentionLv"
            label="意向等级"
          >
            <Select
              options={intentionLvOptions}
              allowClear
              placeholder="全部"
            />
          </Form.Item>
          <Form.Item
            className={styles.sider__box}
            name="readStatus"
            label="是否已读"
          >
            <Select options={readStatusOptions} allowClear placeholder="全部" />
          </Form.Item>
        </Form>
      </div>
      <div className={styles.sider__ft}>footer</div>
    </div>
  );
};

export default Sider;
