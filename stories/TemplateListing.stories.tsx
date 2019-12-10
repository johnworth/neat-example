import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import TemplateListing from "../components/TemplateListing";

export default class TemplateListingTest extends Component {
  render() {
    const templates = {
      templates: [
        {
          id: "69e3071e-defa-11e4-a5e2-bbb1eed77be6",
          name: "NCBI SRA Library",
          description: null,
          __typename: "Template"
        },
        {
          id: "fdb603ea-ea13-11e5-b2c0-1b6904d0cbbd",
          name: "IN PROGRESS - Legume Federation - File Metadata",
          description: null,
          __typename: "Template"
        },
        {
          id: "ab322b3e-ea14-11e5-bb73-7b3e29a70432",
          name: "IN PROGRESS - Legume Federation - Dataset Metadata",
          description: null,
          __typename: "Template"
        },
        {
          id: "4e9d2f4a-4537-11e5-a9c1-bb82a658ac24",
          name: "DOI Request Form",
          description: null,
          __typename: "Template"
        },
        {
          id: "59bd3d26-34d5-4e75-99f5-840a20089caf",
          name: "iPlant Data Store Genome Sequence",
          description: null,
          __typename: "Template"
        },
        {
          id: "f52a4d57-00af-43ec-97d5-1c7e7779f6c3",
          name: "Minimum Information for a Metagenomic Sequence (MIMS)",
          description: null,
          __typename: "Template"
        },
        {
          id: "e7e19316-dc88-11e4-a49a-77c52ae8901a",
          name: "NCBI BioProject Creation",
          description: null,
          __typename: "Template"
        },
        {
          id: "d6d9d874-0016-11e5-b333-8ba8fa0e333b",
          name: "NCBI BioProject Update",
          description: null,
          __typename: "Template"
        },
        {
          id: "2416dda6-618a-11e5-b23b-cfc0d563a471",
          name: "NCBI BioSample - Beta-lactamase",
          description: null,
          __typename: "Template"
        },
        {
          id: "04f9a0f0-6173-11e5-87cf-f7b813370b04",
          name: "NCBI BioSample - Human",
          description: null,
          __typename: "Template"
        },
        {
          id: "c28426a6-6185-11e5-88e2-0b5edba8492e",
          name: "NCBI BioSample - Invertebrate",
          description: null,
          __typename: "Template"
        },
        {
          id: "545b8cee-6187-11e5-b570-0faad7f10494",
          name: "NCBI BioSample - Metagenome or Environmental",
          description: null,
          __typename: "Template"
        },
        {
          id: "3ff802b2-e547-11e4-bc26-ebd238247489",
          name: "NCBI BioSample - Model Organism / Animal",
          description: null,
          __typename: "Template"
        },
        {
          id: "f26a1bac-617e-11e5-a3b7-e32e49a39112",
          name: "NCBI BioSample - Pathogen Clinical / Host-Associated",
          description: null,
          __typename: "Template"
        },
        {
          id: "f6ff8fdc-6181-11e5-8231-ffffa3efac65",
          name: "NCBI BioSample - Pathogen Env / Food / Other",
          description: null,
          __typename: "Template"
        },
        {
          id: "0e794fa6-def4-11e4-b932-933729242a76",
          name: "NCBI BioSample - Plant",
          description: null,
          __typename: "Template"
        },
        {
          id: "be064562-6182-11e5-a281-a310b45880d2",
          name: "NCBI BioSample - Virus",
          description: null,
          __typename: "Template"
        },
        {
          id: "6f1906f2-485d-11e6-ac04-008cfa5ae621",
          name: "NCBI BioSample - Plant WGS",
          description: null,
          __typename: "Template"
        },
        {
          id: "7eaf3fde-47b6-11e6-a566-008cfa5ae621",
          name: "NCBI BioProject Creation WGS",
          description: null,
          __typename: "Template"
        },
        {
          id: "649364fc-d9f7-11e7-914b-008cfa5ae621",
          name: "Astrolabe Metadata",
          description:
            "This template contains fields required for compliance with the IVOA standard (http://www.ivoa.net/Documents/ObsCore/20170509/REC-ObsCore-v1.1-20170509.pdf) plus a few additional fields so that data can be viewed in World Wide Telescope.",
          __typename: "Template"
        },
        {
          id: "ae75bc42-45ec-11e5-801c-43dab0dfe096",
          name: "DOI Request - DataCite 4.1",
          description:
            "New copy of the DataCite metadata template for testing submissions to the DataCite API",
          __typename: "Template"
        },
        {
          id: "f7634a66-ffea-11e4-8660-5f689226541e",
          name: "Foo bar",
          description: null,
          __typename: "Template"
        },
        {
          id: "3f60d6b4-038e-11e7-8c25-008cfa5ae621",
          name: "NCBI WGS Library",
          description: null,
          __typename: "Template"
        },
        {
          id: "88136fd6-617b-11e5-9119-d7f85ee56de9",
          name: "NCBI BioSample - Microbe",
          description: null,
          __typename: "Template"
        },
        {
          id: "cdf61a0a-47ba-11e6-bd78-008cfa5ae621",
          name: "NCBI WGS submission",
          description: null,
          __typename: "Template"
        },
        {
          id: "18a4e9b4-f358-11e8-8786-008cfa5ae621",
          name: "Plant Ontology Terms",
          description: "",
          __typename: "Template"
        },
        {
          id: "d300f3c0-f358-11e8-8928-008cfa5ae621",
          name: "Environment Ontology Terms",
          description: "",
          __typename: "Template"
        },
        {
          id: "a2a6f418-bd47-11e9-a082-008cfa5ae621",
          name: "FuTRES_datasets",
          description:
            "Metadata to attach to each dataset to be ingested into FuTRES",
          __typename: "Template"
        },
        {
          id: "c52b1a0c-0fbd-4120-b107-92154dfbe2dc",
          name: "RNA",
          description: null,
          __typename: "Template"
        },
        {
          id: "aaa6a818-a230-11e7-b1d4-008cfa5ae621",
          name: "Astrolabe-FITS",
          description: "Metadata to associate with FITS files",
          __typename: "Template"
        },
        {
          id: "40ac191f-bb36-4f4e-85fb-8b50abec8e10",
          name: "Minimum Information for a Eukaryotic Genome Sequence (MIGS)",
          description: null,
          __typename: "Template"
        },
        {
          id: "f020975c-45ec-11e5-8137-43f904ce20f3",
          name: "DOI Request - DataCite Metadata",
          description: null,
          __typename: "Template"
        },
        {
          id: "ad3ddf50-85ae-11e6-98c6-008cfa5ae621",
          name: "Dublin Core",
          description:
            "This template contains the Dublin Core metadata elements. For more information on Dublin Core, see http://dublincore.org/. For more information on the elements, see http://dublincore.org/documents/usageguide/elements.shtml. ",
          __typename: "Template"
        },
        {
          id: "66a85f06-17fb-11ea-a65c-c2a97b34bb42",
          name: "donkey-QATestMetadataTemplate-modified",
          description: null,
          __typename: "Template"
        }
      ]
    };

    return <TemplateListing templates={templates.templates} />;
  }
}

storiesOf("Templates", module).add("with templates", () => (
  <TemplateListingTest />
));
