<template>
  <nav>
    <tool-bar/>
    <navigation-bar />
  </nav>
</template>

<script>
import NavigationBar from '@/components/appBars/NavigationBar'
import ToolBar from '@/components/appBars/ToolBar'
export default {
  name: 'AppBars',
  components: {
    NavigationBar,
    ToolBar
  }
}
</script>
