if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "C:/Users/HP/.gradle/caches/8.8/transforms/8b317c6b13d1c5160b5c5e736a471289/transformed/hermes-android-0.76.6-debug/prefab/modules/libhermes/libs/android.x86/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "C:/Users/HP/.gradle/caches/8.8/transforms/8b317c6b13d1c5160b5c5e736a471289/transformed/hermes-android-0.76.6-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

