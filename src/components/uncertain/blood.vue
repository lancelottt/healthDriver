<template>
<div class="blooZo">
    <Blood/>
    <div class="blZon">
        <div class="blooCon">
          <div class="blCon">我的血压</div>
          <div class="highPre">
            <div class="highLeft"></div>
            <div class="hightRight">
                <div class="hiL">
                    <p>0.0</p>
                    <p>高压mmHg</p>
                </div>
                <div class="hiR">
                    <p>0.0</p>
                    <p>低压mmHg</p>
                </div>
            </div>
          </div>
          <div class="statusCircl">
                <ul>
                    <li></li>
                    <li>记录血压</li>
                </ul>
         </div>
        </div>
    </div>
      <!-- 记录血糖** -->
    <div class="blZon sugar">
        <div class="blooCon">
            <div class="blCon">我的血糖</div>
            <div class="highPre">
                <div class="highLeft"></div>
                <div class="hightRight">
                    <div class="hiL">
                        <p>0.0</p>
                        <p>高压mmHg</p>
                    </div>
                    <div class="hiR">
                        <p>0.0</p>
                        <p>低压mmHg</p>
                    </div>
                </div>
            </div>
            <div class="statusCircl">
                <ul>
                    <li></li>
                    <li>记录血压</li>
                </ul>
            </div>
        </div>
    </div>
    <!-- 我的脂肪称** -->
    <div class="fat">
        <div class="fatZ">
            <div class="fatO">我的脂肪称</div>
            <div class="fatT">
                <ul>
                    <li>
                        <P>0</p>
                        <P>脂肪率（%）</p>
                        <P class="lip">
                           无数据 
                        </p>
                    </li>
                    <li>
                        <P>0</p>
                        <P>脂肪率（%）</p>
                        <P class="lip">
                           无数据 
                        </p>
                    </li>
                    <li>
                        <P>0</p>
                        <P>脂肪率（%）</p>
                        <P class="lip">
                           无数据 
                        </p>
                    </li>
                    <li>
                        <P>0</p>
                        <P>脂肪率（%）</p>
                        <P class="lip">
                           无数据 
                        </p>
                    </li>
                    <li>
                        <P>0</p>
                        <P>脂肪率（%）</p>
                        <P class="lip">
                           无数据 
                        </p>
                    </li>
                    <li>
                        <P>0</p>
                        <P>脂肪率（%）</p>
                        <P class="lip">
                           无数据 
                        </p>
                    </li>
                </ul>
            </div>
            <div class="fatS">
                <div class="statusCircl">
                    <ul>
                        <li></li>
                        <li>记录血压</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import Blood from './unheal'
export default {
    components:{
        Blood
    }
}
</script>
<style lang="" scoped>
@import './unheal/blood.css';
    
</style>
