import { Message, Icon } from 'semantic-ui-react'

export const PageNotFound = () => 
   <Message icon negative>
    <Icon name='bug' />
    <Message.Content size='massive'>
      <Message.Header>Page not Found</Message.Header>
      The page you are trying to access is not accessible
    </Message.Content>
  </Message>