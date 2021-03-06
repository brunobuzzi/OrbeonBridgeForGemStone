timer task 2
xpdlDefinition_Timer_Task_2

	^'<?xml version="1.0" encoding="utf-8"?>
<Package xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" Id="e7d74ab3-b817-4476-bcc1-2eb5a0d0834a" Name="Diagram_1" xmlns="http://www.wfmc.org/2009/XPDL2.2">
  <PackageHeader>
    <XPDLVersion>2.2</XPDLVersion>
    <Vendor>Bizagi Process Modeler.</Vendor>
    <Created>2017-10-15T16:31:56.8401671-03:00</Created>
    <ModificationDate>2017-11-02T17:35:31.2606398-03:00</ModificationDate>
    <Description>Diagram_1</Description>
    <Documentation />
  </PackageHeader>
  <RedefinableHeader>
    <Author>Usuario</Author>
    <Version>1.0</Version>
    <Countrykey>CO</Countrykey>
  </RedefinableHeader>
  <ExternalPackages />
  <Pools>
    <Pool Id="6a876ac4-8aa7-409b-9068-6134079b353f" Name="Main Process" Process="3e90d102-ea83-4782-b208-e3a855884069" BoundaryVisible="false">
      <Lanes />
      <NodeGraphicsInfos>
        <NodeGraphicsInfo ToolId="BizAgi_Process_Modeler" Height="350" Width="700" BorderColor="-16777216" FillColor="-1">
          <Coordinates XCoordinate="30" YCoordinate="30" />
        </NodeGraphicsInfo>
      </NodeGraphicsInfos>
    </Pool>
    <Pool Id="939b60f2-b851-4c67-82c4-df02c9c3949d" Name="task_timer_2" Process="84e75b24-ae41-4266-ba55-4b1f21cca5c2" BoundaryVisible="true">
      <Lanes>
        <Lane Id="978d4e06-673c-4bcc-86e8-839a2db1eea7" Name="timer-role" ParentPool="939b60f2-b851-4c67-82c4-df02c9c3949d">
          <NodeGraphicsInfos>
            <NodeGraphicsInfo ToolId="BizAgi_Process_Modeler" Height="228" Width="650" BorderColor="-11513776" FillColor="-1">
              <Coordinates XCoordinate="50" YCoordinate="0" />
            </NodeGraphicsInfo>
          </NodeGraphicsInfos>
          <ExtendedAttributes />
        </Lane>
      </Lanes>
      <NodeGraphicsInfos>
        <NodeGraphicsInfo ToolId="BizAgi_Process_Modeler" Height="228" Width="700" BorderColor="-16777216" FillColor="-1">
          <Coordinates XCoordinate="28" YCoordinate="30" />
        </NodeGraphicsInfo>
      </NodeGraphicsInfos>
    </Pool>
  </Pools>
  <WorkflowProcesses>
    <WorkflowProcess Id="3e90d102-ea83-4782-b208-e3a855884069" Name="Main Process">
      <ProcessHeader>
        <Created>2017-11-02T17:36:09.990311-03:00</Created>
        <Description />
      </ProcessHeader>
      <RedefinableHeader>
        <Author />
        <Version />
        <Countrykey>CO</Countrykey>
      </RedefinableHeader>
      <ActivitySets />
      <DataInputOutputs />
      <ExtendedAttributes>
        <ExtendedAttribute Name="RuntimeProperties" Value="{&quot;processClassProperties&quot;:{&quot;displayName&quot;:&quot;Main Process&quot;,&quot;accessType&quot;:&quot;Process&quot;,&quot;order&quot;:1,&quot;useParentCaseNumber&quot;:true,&quot;enableAlarms&quot;:true,&quot;enableNotifications&quot;:true,&quot;creationDate&quot;:&quot;2017-10-15T16:31:56.8421685-03:00&quot;},&quot;processProperties&quot;:{&quot;version&quot;:{&quot;numberVersion&quot;:&quot;1.0&quot;,&quot;isActive&quot;:true},&quot;versionCreationDate&quot;:&quot;2017-10-15T16:31:56.8421685-03:00&quot;,&quot;supportsScopes&quot;:true,&quot;caseAccessType&quot;:&quot;Public&quot;,&quot;renderVersion&quot;:2,&quot;formsVersion&quot;:0}}" />
      </ExtendedAttributes>
    </WorkflowProcess>
    <WorkflowProcess Id="84e75b24-ae41-4266-ba55-4b1f21cca5c2" Name="task_timer_2">
      <ProcessHeader>
        <Created>2017-11-02T17:36:09.990311-03:00</Created>
        <Description />
      </ProcessHeader>
      <RedefinableHeader>
        <Author />
        <Version />
        <Countrykey>CO</Countrykey>
      </RedefinableHeader>
      <ActivitySets />
      <DataInputOutputs />
      <Activities>
        <Activity Id="319536dc-2549-4fdb-a4b2-98e5c0bbbbdf" Name="start">
          <Description />
          <Event>
            <StartEvent Trigger="None" />
          </Event>
          <Documentation />
          <NodeGraphicsInfos>
            <NodeGraphicsInfo ToolId="BizAgi_Process_Modeler" Height="30" Width="30" BorderColor="-10311914" FillColor="-1638505">
              <Coordinates XCoordinate="138" YCoordinate="95" />
            </NodeGraphicsInfo>
          </NodeGraphicsInfos>
          <ExtendedAttributes>
            <ExtendedAttribute Name="RuntimeProperties" Value="{}" />
          </ExtendedAttributes>
        </Activity>
        <Activity Id="d9869421-91d9-452e-ab6b-a93e1245a240" Name="term">
          <Description />
          <Event>
            <IntermediateEvent Trigger="Timer">
              <TriggerTimer TimeDate="2017-10-15T00:00:00" />
            </IntermediateEvent>
          </Event>
          <Documentation />
          <NodeGraphicsInfos>
            <NodeGraphicsInfo ToolId="BizAgi_Process_Modeler" Height="30" Width="30" BorderColor="-6909623" FillColor="-66833">
              <Coordinates XCoordinate="430" YCoordinate="95" />
            </NodeGraphicsInfo>
          </NodeGraphicsInfos>
          <ExtendedAttributes>
            <ExtendedAttribute Name="RuntimeProperties" Value="{&quot;cost&quot;:0}" />
            <ExtendedAttribute Name="activationBlock" Value="&lt;p style=&quot;text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;&quot;&gt;&lt;span style=&quot;color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;&quot;&gt;[:lastExecutedTime :currentTime :process | (lastExecutedTime plusSeconds: (process termValue)) &amp;lt;= currentTime ]&lt;/span&gt;&lt;/p&gt;" />
          </ExtendedAttributes>
        </Activity>
        <Activity Id="ef8bcc53-51ce-4621-8aed-5cc956f9f95c" Name="end">
          <Description />
          <Event>
            <EndEvent Result="None" />
          </Event>
          <Documentation />
          <NodeGraphicsInfos>
            <NodeGraphicsInfo ToolId="BizAgi_Process_Modeler" Height="30" Width="30" BorderColor="-6750208" FillColor="-1135958">
              <Coordinates XCoordinate="575" YCoordinate="95" />
            </NodeGraphicsInfo>
          </NodeGraphicsInfos>
          <ExtendedAttributes />
        </Activity>
        <Activity Id="dc53df7b-0215-491f-b068-9a1832d48797" Name="set-timer-term">
          <Description />
          <Implementation>
            <Task />
          </Implementation>
          <Performers />
          <Documentation />
          <Loop LoopType="None" />
          <NodeGraphicsInfos>
            <NodeGraphicsInfo ToolId="BizAgi_Process_Modeler" Height="60" Width="90" BorderColor="-16553830" FillColor="-1249281">
              <Coordinates XCoordinate="226" YCoordinate="80" />
            </NodeGraphicsInfo>
          </NodeGraphicsInfos>
          <ExtendedAttributes />
        </Activity>
        <Activity Id="368a790b-cb63-46b1-ad95-b6720678206f" Name="task timer">
          <Description />
          <Event>
            <IntermediateEvent Trigger="Timer" Target="dc53df7b-0215-491f-b068-9a1832d48797" IsAttached="true">
              <TriggerTimer TimeDate="2017-10-15T00:00:00" />
            </IntermediateEvent>
          </Event>
          <Documentation />
          <NodeGraphicsInfos>
            <NodeGraphicsInfo ToolId="BizAgi_Process_Modeler" Height="22" Width="22" BorderColor="-6909623" FillColor="-66833">
              <Coordinates XCoordinate="236" YCoordinate="140" />
            </NodeGraphicsInfo>
          </NodeGraphicsInfos>
          <ExtendedAttributes>
            <ExtendedAttribute Name="activationBlock" Value="&lt;p style=&quot;text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;&quot;&gt;&lt;span style=&quot;color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;&quot;&gt;[:lastExecutedTime :currentTime :process | (lastExecutedTime plusSeconds: 10) &amp;lt;= currentTime ]&lt;/span&gt;&lt;/p&gt;" />
          </ExtendedAttributes>
        </Activity>
        <Activity Id="c0adb58b-8aae-4b6b-8f2a-d45722eacc35" Name="user-form">
          <Description />
          <Implementation>
            <Task />
          </Implementation>
          <Performers />
          <Documentation />
          <Loop LoopType="None" />
          <NodeGraphicsInfos>
            <NodeGraphicsInfo ToolId="BizAgi_Process_Modeler" Height="60" Width="90" BorderColor="-16553830" FillColor="-1249281">
              <Coordinates XCoordinate="423" YCoordinate="177" />
            </NodeGraphicsInfo>
          </NodeGraphicsInfos>
          <ExtendedAttributes />
        </Activity>
      </Activities>
      <Transitions>
        <Transition Id="4680359c-b679-41f0-a043-c1c1b09320f2" From="319536dc-2549-4fdb-a4b2-98e5c0bbbbdf" To="dc53df7b-0215-491f-b068-9a1832d48797">
          <Condition />
          <Description />
          <ConnectorGraphicsInfos>
            <ConnectorGraphicsInfo ToolId="BizAgi_Process_Modeler" BorderColor="-16777216">
              <Coordinates XCoordinate="168" YCoordinate="110" />
              <Coordinates XCoordinate="226" YCoordinate="110" />
            </ConnectorGraphicsInfo>
          </ConnectorGraphicsInfos>
          <ExtendedAttributes />
        </Transition>
        <Transition Id="5a799bb1-d5e6-4523-8587-3d6317e5df32" From="dc53df7b-0215-491f-b068-9a1832d48797" To="d9869421-91d9-452e-ab6b-a93e1245a240">
          <Condition />
          <Description />
          <ConnectorGraphicsInfos>
            <ConnectorGraphicsInfo ToolId="BizAgi_Process_Modeler" BorderColor="-16777216">
              <Coordinates XCoordinate="316" YCoordinate="110" />
              <Coordinates XCoordinate="430" YCoordinate="110" />
            </ConnectorGraphicsInfo>
          </ConnectorGraphicsInfos>
          <ExtendedAttributes />
        </Transition>
        <Transition Id="8ad97015-ff20-4bcc-9714-1785eedb562a" From="d9869421-91d9-452e-ab6b-a93e1245a240" To="ef8bcc53-51ce-4621-8aed-5cc956f9f95c">
          <Condition />
          <Description />
          <ConnectorGraphicsInfos>
            <ConnectorGraphicsInfo ToolId="BizAgi_Process_Modeler" BorderColor="-16777216">
              <Coordinates XCoordinate="460" YCoordinate="110" />
              <Coordinates XCoordinate="575" YCoordinate="110" />
            </ConnectorGraphicsInfo>
          </ConnectorGraphicsInfos>
          <ExtendedAttributes />
        </Transition>
        <Transition Id="f701c485-a3ad-4d2e-96d8-f28c51163fbd" From="368a790b-cb63-46b1-ad95-b6720678206f" To="c0adb58b-8aae-4b6b-8f2a-d45722eacc35" Name="">
          <Condition />
          <Description />
          <ConnectorGraphicsInfos>
            <ConnectorGraphicsInfo ToolId="BizAgi_Process_Modeler" BorderColor="-16777216">
              <Coordinates XCoordinate="236" YCoordinate="140" />
              <Coordinates XCoordinate="236" YCoordinate="207" />
              <Coordinates XCoordinate="423" YCoordinate="207" />
            </ConnectorGraphicsInfo>
          </ConnectorGraphicsInfos>
          <ExtendedAttributes />
        </Transition>
        <Transition Id="c3590230-5def-438e-ba27-c295a96b8328" From="c0adb58b-8aae-4b6b-8f2a-d45722eacc35" To="ef8bcc53-51ce-4621-8aed-5cc956f9f95c">
          <Condition />
          <Description />
          <ConnectorGraphicsInfos>
            <ConnectorGraphicsInfo ToolId="BizAgi_Process_Modeler" BorderColor="-16777216">
              <Coordinates XCoordinate="513" YCoordinate="207" />
              <Coordinates XCoordinate="590" YCoordinate="207" />
              <Coordinates XCoordinate="590" YCoordinate="125" />
            </ConnectorGraphicsInfo>
          </ConnectorGraphicsInfos>
          <ExtendedAttributes />
        </Transition>
      </Transitions>
      <ExtendedAttributes>
        <ExtendedAttribute Name="RuntimeProperties" Value="{&quot;processClassProperties&quot;:{&quot;accessType&quot;:&quot;Process&quot;,&quot;order&quot;:1,&quot;useParentCaseNumber&quot;:true,&quot;enableAlarms&quot;:true,&quot;enableNotifications&quot;:true,&quot;creationDate&quot;:&quot;2017-10-15T16:31:56.8552562-03:00&quot;,&quot;description&quot;:&quot;&quot;},&quot;processProperties&quot;:{&quot;version&quot;:{&quot;numberVersion&quot;:&quot;1.0&quot;,&quot;isActive&quot;:true},&quot;versionCreationDate&quot;:&quot;2017-10-15T16:31:56.8552562-03:00&quot;,&quot;supportsScopes&quot;:true,&quot;caseAccessType&quot;:&quot;Public&quot;,&quot;renderVersion&quot;:2,&quot;formsVersion&quot;:0}}" />
      </ExtendedAttributes>
    </WorkflowProcess>
  </WorkflowProcesses>
  <ExtendedAttributes />
</Package>'