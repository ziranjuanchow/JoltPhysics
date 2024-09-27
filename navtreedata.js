/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "Jolt Physics", "index.html", [
    [ "Architecture of Jolt Physics", "index.html#architecture-jolt-physics", null ],
    [ "Bodies", "index.html#bodies", [
      [ "Types", "index.html#body-types", null ],
      [ "Creating Bodies", "index.html#creating-bodies", null ],
      [ "Multithreaded Access", "index.html#autotoc_md82", null ],
      [ "Single Threaded Access", "index.html#single-threaded-access", null ],
      [ "Shapes", "index.html#shapes", [
        [ "Dynamic Mesh Shapes", "index.html#dynamic-mesh-shapes", null ],
        [ "Creating Shapes", "index.html#creating-shapes", null ],
        [ "Saving Shapes", "index.html#saving-shapes", null ],
        [ "Convex Radius", "index.html#convex-radius", null ],
        [ "Center of Mass", "index.html#center-of-mass", null ],
        [ "Scaling Shapes", "index.html#scaling-shapes", null ],
        [ "Creating Custom Shapes", "index.html#creating-custom-shapes", null ]
      ] ],
      [ "Sensors", "index.html#sensors", null ],
      [ "Sleeping", "index.html#sleeping-bodies", null ],
      [ "Soft Bodies", "index.html#soft-bodies", [
        [ "Soft Body Contact Listeners", "index.html#soft-body-contact-listener", null ],
        [ "Skinning Soft Bodies", "index.html#skinning-soft-bodies", null ],
        [ "Soft Body Work In Progress", "index.html#soft-body-wip", null ]
      ] ]
    ] ],
    [ "Constraints", "index.html#constraints", [
      [ "Constraint Motors", "index.html#constraint-motors", null ],
      [ "Breakable Constraints", "index.html#breakable-constraints", null ]
    ] ],
    [ "Collision Detection", "index.html#collision-detection", [
      [ "Broad Phase", "index.html#broad-phase", null ],
      [ "Narrow Phase", "index.html#narrow-phase", null ],
      [ "Collision Filtering", "index.html#collision-filtering", null ],
      [ "Continuous Collision Detection", "index.html#continuous-collision-detection", null ],
      [ "Ghost Collisions", "index.html#ghost-collisions", null ]
    ] ],
    [ "Character Controllers", "index.html#character-controllers", null ],
    [ "The Simulation Step", "index.html#the-simulation-step", null ],
    [ "Conventions and Limits", "index.html#conventions-and-limits", null ],
    [ "Big Worlds", "index.html#big-worlds", null ],
    [ "Deterministic Simulation", "index.html#deterministic-simulation", null ],
    [ "Rolling Back a Simulation", "index.html#rolling-back-a-simulation", null ],
    [ "Being Sloppy While Still Being Deterministic", "index.html#sloppy-determinism", null ],
    [ "Working With Multiple Physics Systems", "index.html#working-with-multiple-physics-systems", null ],
    [ "Debug Rendering", "index.html#debug-rendering", null ],
    [ "Memory Management", "index.html#memory-management", null ],
    [ "The Simulation Step in Detail", "index.html#the-simulation-step-in-detail", [
      [ "Broad Phase Update Prepare", "index.html#broad-phase-update-prepare", null ],
      [ "Broad Phase Update Finalize", "index.html#broad-phase-update-finalize", null ],
      [ "Step Listeners", "index.html#step-listeners-update", null ],
      [ "Apply Gravity", "index.html#apply-gravity-update", null ],
      [ "Determine Active Constraints", "index.html#determine-active-constraints", null ],
      [ "Build Islands from Constraints", "index.html#build-islands-from-constraints", null ],
      [ "Find Collisions", "index.html#find-collisions", null ],
      [ "Setup Velocity Constraints", "index.html#setup-velocity-constraints", null ],
      [ "Finalize Islands", "index.html#finalize-islands", null ],
      [ "Set Body Island Idx", "index.html#set-body-island-idx", null ],
      [ "Solve Velocity Constraints", "index.html#solve-velocity-constraints", null ],
      [ "Pre Integrate", "index.html#pre-integrate", null ],
      [ "Integrate & Clamp Velocities", "index.html#integrate-and-clamp-velocities", null ],
      [ "Post Integrate", "index.html#post-integrate", null ],
      [ "Find CCD Contacts", "index.html#find-ccd-contacts", null ],
      [ "Resolve CCD Contacts", "index.html#resolve-ccd-contacts", null ],
      [ "Finalize Contact Cache, Contact Removed Callbacks", "index.html#finalize-contact-cache", null ],
      [ "Solve Position Constraints, Update Bodies Broad Phase", "index.html#solve-position-constraints", null ],
      [ "Soft Body Prepare", "index.html#soft-body-prepare", null ],
      [ "Soft Body Collide", "index.html#soft-body-collide", null ],
      [ "Soft Body Simulate", "index.html#soft-body-simulate", null ],
      [ "Soft Body Finalize", "index.html#soft-body-finalize", null ]
    ] ],
    [ "Jolt Physics Samples", "md__docs_2_samples.html", [
      [ "General Controls", "md__docs_2_samples.html#autotoc_md2", null ],
      [ "The Tests", "md__docs_2_samples.html#autotoc_md3", [
        [ "Vehicles", "md__docs_2_samples.html#autotoc_md4", null ],
        [ "Rig (Ragdolls)", "md__docs_2_samples.html#autotoc_md8", null ],
        [ "Soft Body", "md__docs_2_samples.html#autotoc_md9", null ],
        [ "Character", "md__docs_2_samples.html#autotoc_md10", null ],
        [ "Water", "md__docs_2_samples.html#autotoc_md11", null ],
        [ "Constraints", "md__docs_2_samples.html#autotoc_md13", null ],
        [ "General", "md__docs_2_samples.html#autotoc_md14", null ],
        [ "Shapes & Scaled Shapes", "md__docs_2_samples.html#autotoc_md15", null ]
      ] ]
    ] ],
    [ "Performance Test", "md__docs_2_performance_test.html", [
      [ "Commandline options", "md__docs_2_performance_test.html#autotoc_md5", null ],
      [ "Output", "md__docs_2_performance_test.html#autotoc_md6", null ],
      [ "Results", "md__docs_2_performance_test.html#autotoc_md7", null ]
    ] ],
    [ "Release Notes", "md__docs_2_release_notes.html", [
      [ "Unreleased changes", "md__docs_2_release_notes.html#autotoc_md17", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md18", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md19", null ]
      ] ],
      [ "v5.1.0", "md__docs_2_release_notes.html#autotoc_md20", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md21", [
          [ "Soft Body", "md__docs_2_release_notes.html#autotoc_md22", null ],
          [ "HeightField Shape", "md__docs_2_release_notes.html#autotoc_md23", null ],
          [ "Character", "md__docs_2_release_notes.html#autotoc_md24", null ],
          [ "Vehicles", "md__docs_2_release_notes.html#autotoc_md25", null ],
          [ "Various", "md__docs_2_release_notes.html#autotoc_md26", null ]
        ] ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md28", null ]
      ] ],
      [ "v5.0.0", "md__docs_2_release_notes.html#autotoc_md30", [
        [ "New Functionality", "md__docs_2_release_notes.html#autotoc_md31", [
          [ "Soft Body", "md__docs_2_release_notes.html#autotoc_md32", null ],
          [ "Vehicles", "md__docs_2_release_notes.html#autotoc_md34", null ],
          [ "Character", "md__docs_2_release_notes.html#autotoc_md35", null ],
          [ "Constraints", "md__docs_2_release_notes.html#autotoc_md37", null ],
          [ "Collision Detection", "md__docs_2_release_notes.html#autotoc_md39", null ],
          [ "Simulation", "md__docs_2_release_notes.html#autotoc_md40", null ],
          [ "Various", "md__docs_2_release_notes.html#autotoc_md41", null ]
        ] ],
        [ "Removed functionality", "md__docs_2_release_notes.html#autotoc_md42", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md44", null ]
      ] ],
      [ "v4.0.2", "md__docs_2_release_notes.html#autotoc_md45", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md46", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md48", null ]
      ] ],
      [ "v4.0.1", "md__docs_2_release_notes.html#autotoc_md49", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md50", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md51", null ]
      ] ],
      [ "v4.0.0", "md__docs_2_release_notes.html#autotoc_md52", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md54", null ],
        [ "Removed functionality", "md__docs_2_release_notes.html#autotoc_md56", null ],
        [ "New supported platforms", "md__docs_2_release_notes.html#autotoc_md57", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md58", null ]
      ] ],
      [ "v3.0.0", "md__docs_2_release_notes.html#autotoc_md59", null ],
      [ "v2.0.1", "md__docs_2_release_notes.html#autotoc_md60", null ],
      [ "v2.0.0", "md__docs_2_release_notes.html#autotoc_md61", [
        [ "Major new functionality", "md__docs_2_release_notes.html#autotoc_md62", null ],
        [ "New supported compilers", "md__docs_2_release_notes.html#autotoc_md63", null ],
        [ "New supported platforms", "md__docs_2_release_notes.html#autotoc_md64", null ]
      ] ],
      [ "v1.1.0", "md__docs_2_release_notes.html#autotoc_md65", null ],
      [ "v1.0.0", "md__docs_2_release_notes.html#autotoc_md66", null ]
    ] ],
    [ "Breaking API Changes", "md__docs_2_a_p_i_changes.html", [
      [ "Changes between v5.1.0 and latest", "md__docs_2_a_p_i_changes.html#autotoc_md27", null ],
      [ "Changes between v5.0.0 and v5.1.0", "md__docs_2_a_p_i_changes.html#autotoc_md29", null ],
      [ "Changes between v4.0.2 and v5.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md33", null ],
      [ "Changes between v4.0.0 and v4.0.2", "md__docs_2_a_p_i_changes.html#autotoc_md36", null ],
      [ "Changes between v3.0.1 and v4.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md38", null ],
      [ "Changes between v2.0.1 and v3.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md43", null ],
      [ "Changes between v1.1.0 and v2.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md47", null ],
      [ "Changes between v1.0.0 and v1.1.0", "md__docs_2_a_p_i_changes.html#autotoc_md53", null ],
      [ "Changes between v0.0.0 and v1.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md55", null ]
    ] ],
    [ "Building and Using Jolt Physics", "md__build_2_r_e_a_d_m_e.html", [
      [ "Build Types", "md__build_2_r_e_a_d_m_e.html#autotoc_md69", null ],
      [ "Includes", "md__build_2_r_e_a_d_m_e.html#autotoc_md70", null ],
      [ "Defines", "md__build_2_r_e_a_d_m_e.html#autotoc_md71", null ],
      [ "Logging & Asserting", "md__build_2_r_e_a_d_m_e.html#autotoc_md72", null ],
      [ "Custom Memory Allocator", "md__build_2_r_e_a_d_m_e.html#autotoc_md73", null ],
      [ "Building", "md__build_2_r_e_a_d_m_e.html#autotoc_md74", null ],
      [ "Other Build Tools", "md__build_2_r_e_a_d_m_e.html#autotoc_md75", null ],
      [ "Errors", "md__build_2_r_e_a_d_m_e.html#autotoc_md76", [
        [ "Link Error: File Format Not Recognized", "md__build_2_r_e_a_d_m_e.html#autotoc_md77", null ],
        [ "Link Error: Unresolved External Symbol", "md__build_2_r_e_a_d_m_e.html#autotoc_md78", null ],
        [ "DirectX Error", "md__build_2_r_e_a_d_m_e.html#autotoc_md79", null ],
        [ "Illegal Instruction Error", "md__build_2_r_e_a_d_m_e.html#autotoc_md80", null ]
      ] ],
      [ "Doxygen on Windows", "md__build_2_r_e_a_d_m_e.html#autotoc_md81", null ]
    ] ],
    [ "Projects Using Jolt", "md__docs_2_projects_using_jolt.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ],
        [ "Related Symbols", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"_a_a_b_b_tree_builder_8cpp.html",
"_constraint_8h.html#adfc8350888df0c3a51714b7f372baf2dacd2c8bc6e5f1ea17c918ccaf89660104",
"_height_field_shape_8h.html#a37ca4958b8fd6b37a4982941ca479a85",
"_object_stream_text_in_8h.html",
"_scope_exit_8h.html#af3b6234fdd42f0f27a584738fb79b60a",
"_swing_twist_constraint_part_8h.html#add9e89df628b33308461ef46e1b796b6",
"class_a_a_box.html#aaea4b8b5fc160778df59859a1c4dc69b",
"class_body_creation_settings.html#a8b4eaa2eceb1493a1a70d3bef422e3ad",
"class_box_shape.html#a5abe98f791addef880ea73ea813ec372",
"class_character_base.html#acf9a8bdf6fa420d9615206d196794135",
"class_color.html#a177ce5853f9bb12fda1c545dfb6f4ddf",
"class_convex_hull_builder2_d.html#a5827b465379b2d68b9bf2e6968565df5",
"class_d_vec3.html#a8dee0ba62485a3b2fe924f1fa582c269",
"class_e_p_a_convex_hull_builder_1_1_triangle.html#abf3e8715dbc37a34783e322dc2211074",
"class_height_field_shape_settings.html#a8028cb21d400d589b670f0a88d25e4b8",
"class_job_system_single_threaded_1_1_barrier_impl.html",
"class_mesh_shape_settings.html#a53088eb2ee555b196c0e50cd5972e07b",
"class_object_stream_binary_out.html#a9a8860b8189ef78d0ed13b4d06bb2086",
"class_physics_system.html#a3ec396058f674026726e59dc7ad20609",
"class_quat.html#a21f44684684b475d9f5d02ed9c580def",
"class_result.html#a2de3e8315a673e4fc3e627eafad42586",
"class_shape_cast_result.html#afb01699f4368bbbeec678f0c3c21108d",
"class_slider_constraint_settings.html#a067096ef3ef94d99ba6d22b946145759",
"class_specified_broad_phase_layer_filter.html#aedde7395b8b32b17168accd40be9860d",
"class_swing_twist_constraint.html#a51932e901316b06ac2c5a55c5ce54856",
"class_triangle_codec_indexed8_bit_pack_s_o_a4_flags.html#adf7b4eade64871b3f53059bdacf9aacea20bbfa39a2c203daad6afc217b354199",
"class_vec3.html#aeeadce7b9b442cccab2d2f3cbde2ccb9",
"class_vehicle_track.html#a5f6ed5aff504c081d9ad67fc3dc8edec",
"functions_o.html",
"namespace_height_field_shape_constants.html#ac7f85b459fc57cd090cdd118a0072d4b",
"struct_compound_shape_1_1_sub_shape.html#a92de7326e077355d680f2d6ce860d7fc",
"struct_ray_cast_t.html#a3d875537a981684b35d6a1a1cf2e59d2"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';