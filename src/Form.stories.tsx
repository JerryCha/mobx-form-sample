import { Input, InputNumber, Radio, Grid } from '@arco-design/web-react'
import { Form } from './components/Form/Form'
import { Item } from './components/Form/Item'
import '@arco-design/web-react/dist/css/arco.css'

const { Row, Col } = Grid

export const FormStory = () => {
  return (
    <Form>
      <Item name="name">
        {(value, onChange, _) => (
          <Row>
            <Input value={value} onChange={(value) => onChange(value)} />
          </Row>
        )}
      </Item>
      <Item name="age">
        {(value, onChange, _) => (
          <Row>
            <InputNumber value={value} onChange={(value) => onChange(value)} />
          </Row>
        )}
      </Item>
      <Item name="gender">
        {(value, onChange, _) => (
          <Row>
            <Radio.Group
              value={value}
              onChange={onChange}
              options={[
                { label: 'male', value: 'm' },
                { label: 'female', value: 'f' },
              ]}
            />
          </Row>
        )}
      </Item>
    </Form>
  )
}

FormStory.storyName = 'MobX Form'
