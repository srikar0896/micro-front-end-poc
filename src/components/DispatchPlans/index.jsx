import React from 'react';
import { ListCard, Typography } from 'ui-infra';

const { Text } = Typography;

const DispatchPlans = () => {
  const ids = [1, 2, 3];
  return (
    <div>
      <Text strong>DCMS</Text>
      {ids.map((id, index) => (
        <div key={id}>
          <ListCard
            columns={[
              {
                columnRatio: 2,
                details: [
                  {
                    text: id,
                    type: 'link',
                  },
                  {
                    subText: true,
                    text: 'November 19',
                    type: 'text',
                  },
                ],
                label: 'Dispatch Plan',
              },
              {
                columnRatio: 1,
                details: [
                  {
                    tagColor: 'geekblue',
                    text: 'This is a tag',
                    type: 'tag',
                  },
                ],
                label: 'DETAILS',
              },
              {
                columnRatio: 1,
                details: [
                  {
                    text: 'Body text',
                    type: 'text',
                  },
                  {
                    onAction: function noRefCheck() {},
                    subText: true,
                    text: 'Body text',
                    type: 'link',
                  },
                ],
                label: 'DETAILS',
              },
              {
                columnRatio: 1,
                details: [
                  {
                    renderNode: function noRefCheck() {},
                    type: 'node',
                  },
                  {
                    buttonType: 'primary',
                    onAction: () => {
                      console.log(`action on ${id} - dispatch plan`);
                    },
                    text: 'Action1',
                    type: 'button',
                  },
                ],
                lastColumnColor: 'aliceblue',
              },
            ]}
            showMore
            showMoreTableDataSource={[
              {
                data: '22443',
                dataIndex: 'id',
                key: 'id',
                render: function noRefCheck() {},
                title: 'ID',
              },
            ]}
            showMoreTableFooter={() => console.log('Show more')}
            showTimeline
            showTimelineData={{
              current: '[Circular]',
              steps: [
                {
                  description: {
                    delay: 0,
                    lowerDescription: 'Aug 1 2019',
                    upperDescription: 'Aug 1 2019',
                  },
                  title: 'Finished',
                },
                {
                  description: {
                    delay: 2,
                    lowerDescription: 'Aug 7 2019',
                    upperDescription: 'Aug 5 2019',
                  },
                  title: 'In Progress',
                },
                {
                  description: {
                    upperDescription: 'Aug 9 2019',
                  },
                  title: 'Waiting',
                },
              ],
            }}
          />
          {index + 1 < ids.length && <hr />}
        </div>
      ))}
    </div>
  );
};

export default DispatchPlans;
